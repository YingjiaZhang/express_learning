/**
 * Created by Sunshine on 2016/8/2.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*
 ø… π”√£ø* */

app.post('/', function (req, res) {
    console.log(req.body);
    res.send('user ' + req.body);

});

var server = app.listen(3004, function () {
    console.log('----');
});