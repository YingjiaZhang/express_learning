/**
 * Created by Sunshine on 2016/8/3.
 */

var superagent = require('superagent');

superagent
    .post('localhost:3000/')
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .type('form')
    .query({name:'my superagent'})
    .send({age:1})
    .end(function (err,res) {

        console.log(res.statusCode);
        if(res.statusCode===200){
            console.log(res.get('Content-Type'));
        }
        console.log('one request end');
    });




