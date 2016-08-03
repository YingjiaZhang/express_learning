/**
 * Created by Sunshine on 2016/8/3.
 */
var express = require('express');
var app = express();

app.post('/',function(req,res){
    console.log(req.query);
    res.json({ user: 'tobi' });
});

app.listen(3000,function(){
    console.log('start');
});