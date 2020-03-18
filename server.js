const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public'));
mongoose.connect('mongodb://localhost/RestfullTaskAPI', {useNewUrlParser: true});
require('./server/config/routes.js')(app)



app.listen(8000, () => console.log("listening to port 8000"));
