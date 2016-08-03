/**
 * Created by Sunshine on 2016/8/3.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('http://baidu.com',function(req,res){
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
    console.log(req.headers);
    res.send('my first superagent.');
});
app.listen(3000,function(){
    console.log('start');
});
