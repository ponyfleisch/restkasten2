require('dotenv').config({silent: true});
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = express();

var port = process.env.PORT || 3001;

app.use(bodyParser.json());

api.post('/access', function(req, res){
    console.log('access');
    console.log(req.body);
    res.send('relay1=5000, relay2=0');
});

var money = 0.0;

api.post('/userinfo', function(req, res){
    console.log('userinfo');
    console.log(req.body);
    res.send('name=Sepp, lastname=Sepperson, money='+money.toFixed(2));
});


api.post('/addmoney', function(req, res){
    console.log('addmoney');
    console.log(req.body);
    money += parseFloat(req.body.money);
    res.send('name=Sepp, lastname=Sepperson, money='+money.toFixed(2));
});

app.use('/api', api);

app.listen(port);