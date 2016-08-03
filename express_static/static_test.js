/**
 * Created by Sunshine on 2016/8/2.
 */
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/',function(req, res){
    console.log(req);
});

var server = app.listen(3000,function(){
    console.log("test");
});