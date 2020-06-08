module.exports={
    port:3000,
    jwt:{
        secret:"giri@120#",
        options:{expiresIn : 60 * 60 * 24 * 1}
    },

    db:{
        uri:"mongodb://localhost:27017/demonodejs"
    }
}