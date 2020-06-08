let config = require('./config');
let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');
let routes = require('./routes/routes')
let app = express();


app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit : '50mb', extended:true}));

mongoose.connect(config.db.uri).then(
    ()=>{ console.log("successfully connected to DB");}
)



app.use('/api', routes); 

app.listen(config.port);

module.exports = app;