/**
 * Created by Sunshine on 2016/8/3.
 */
var express = require('express');
var app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/',function(req,res){
    console.log(req.body);
    res.send(req.body);
});
app.listen(3000,function(){
    console.log('start');
});
