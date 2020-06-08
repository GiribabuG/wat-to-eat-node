var singUpData = require('./model')
var validations = require('../../../../../common/validation')
let jwt = require('jsonwebtoken');
let config = require('../../../../../config')
const sgMail = require('@sendgrid/mail');

let singUp = (req, res) => {
    var body = req.body;

    new Promise((resolve, reject) => {
        console.log(req.body)

        if (!body.name) reject('Username cannot be empty')
        if (!body.email) reject('Email cannot be empty')
        if (!body.password) reject('Password cannot be empty')

        if (!validations.isValidEmail(body.email)) reject('not a valid email address')
        else resolve(null)


    }).then(() => {
        singUpData.create(body)
            .then(
                (response) => {
                    res.status(200).json({ status: true, message: "Succesfully registered", user: response })
                }
            ).catch(
                (error) => {
                    res.status(400).json({ status: false, message: "Please try again" });
                }
            )


    }).catch(err => {
        console.log("error===>", err);

        res.status(500).json({ message: err, status: false })
    })
}



let login = (req, res) => {
    new Promise((resolve, reject) => {
        if (!req.body.email) reject('email cannot be empty')
        if (!validations.isValidEmail(req.body.email)) reject('not a valid email address')
        else resolve(null)
    }).then(() => {
        singUpData.findOne({ email: req.body.email })
            .then((response) => {
                if (response.password == req.body.password) {
                    jwt.sign({ id: response._id }, config.jwt.secret, function (err, encodedData) {
                        if (err) {
                            throw err;

                        } else {
                            res.status(200).json({ status: true, message: "Login Successful", user: response.email, jwt: encodedData });
                        }
                    })

                } else {
                    res.status(200).json({ status: false, message: "Wrong Credentials" });
                }
            })
    }).catch(err => {
        console.log("error===>", err);

        res.status(500).json({ message: err, status: false })
    })
}



let resetPassword = (req, res) => {
    new Promise((resolve, reject) => {
        if (!req.body.email) reject('E-amil cannot be empty')

        else resolve(null)
    }).then(() => {
        singUpData.findOne({ email: req.body.email }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.status(400).json({ message: 'user does not exist', status: false })
            } else {
                var token = jwt.sign({data:{ id: user._id, email: user.email} },
                    config.jwt.secret, { expiresIn: 60 * 60 * 60 * 365 });
                    user.resetPasswordToken = token;
                    user.resetPasswordExpires = Date.now() + 3600000;
                    
                    user.save(function (err) {
                        console.log(user.resetPasswordToken)
                        console.log("token saved in db")
                        // res.status(200).json({ message: 'password mail sent', token, status: true })
                        sgMail.setApiKey('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');

                        const message = {
                            to: 'developer332@pay9.in',
                            from: 'no-reply@pay9.in',
                            subject: 'Reset your Password',
                            html: 'Hi ' + user.name + '\n You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                                + '/auth/reset-password/' + user._id + '/' + token + '\n\n' +
                                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                        }
                        sgMail.send(message).then(() => {

                            res.status(200).json({ message: 'password mail sent', token, status: true })

                        }).catch(err => {
                            console.log(err)
                            res.status(400).json({ message: err, status: false })
                        })
                    })

                
            }
        })
    }).catch(err => {

        res.status(400).json({ message: err, status: false })

    })
}


let verifyResetPassword = (req, res) => {
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNWVkMzMyZDlhODNkMDcxMjI0YmZkY2Y0IiwiZW1haWwiOiJnaXJAZ2FtaWwuY29tIn0sImlhdCI6MTU5MDk3ODc1MSwiZXhwIjoxNjY5ODE4NzUxfQ.GKVt5361fW4TlULXFwlHntJ1E4XFJZcZumYs-fev2vo"

    new Promise((resolve, reject) => {
        if (!req.body.password) reject('password cannot be empty')
        if (!token) reject('token cannot be empty')
        if (!req.body.id) reject('user id cannot be empty')
        else resolve(null)  
    }).then(() => {

        singUpData.findById({ _id: req.body.id }, function (err, user) {
            console.log( req.body.password)
            if (token == user.resetPasswordToken) {
                user.password = req.body.password;
                user.save(function (err) {
                    
                    console.log("new password saved in db")
                });
    
                sgMail.setApiKey('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');
    
                const message = {
                    to: 'developer2@pay9.in',
                    from: 'no-reply@pay9.in',
                    subject: 'Password has been reset',
                    html: 'Hi ' + user.name + '\n This is to notify you that youre password has been reset recently n\n' +
                        'If you did not request this, please contact the administrartor at the earliest .\n'
    
                };
    
                sgMail.send(message).then(() => {
                    if (err) throw err;
                    res.status(200).json({ message: 'password has been reset succesfully', status: true })
                }).catch(err => {
                    res.status(400).json({ message: err, status: false })
                })
    
            }else{
                res.status(200).json({ status: false, message: "token not match" });
            }
        })

    }).catch(err => {

        res.status(400).json({ message: err, status: false })

    })


}

module.exports = {
    singUp,
    login,
    resetPassword,
    verifyResetPassword

}