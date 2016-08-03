/**
 * Created by Sunshine on 2016/8/2.
 */
var express = require('express');
var app = express();


/*
 ø… π”√£ø* */

app.post('/user/:id&:name', function (req, res) {
    console.log(req.params);
    res.send(req.params.id);
});

var server = app.listen(3004, function () {
    console.log('----');
});