let createError = require('http-errors');
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

//import route 
let absensi = require('./routes/absensi');

//connect mongoose to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/absensi', { useNewUrlParser: true })
    .then(() => console.log("Connect to MongoDB Successfuly"))
    .catch((error) => console.log(error));


//create app variable as express
let app = express();

//configuration express js to use body-parser as middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//use route that we has imported
app.use('/absensi', absensi);


// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

module.exports = app;