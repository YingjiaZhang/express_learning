/**
 * Created by Sunshine on 2016/8/2.
 */
var express = require('express');
var app = express();

app.post('/user/:id&:name', function (req, res) {
    console.log(req.params);
    res.send(req.params.id);
});

var server = app.listen(3000, function () {
    console.log('start');
});