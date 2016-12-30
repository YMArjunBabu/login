var bouncy = require('bouncy');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended : false});
app.post('/login',urlEncodedParser,function(req,res){
  console.log("/login",req.body,"you are in 8029 port");
});

var server = bouncy(function (req, res, bounce) {
  console.log(req.headers.host);
    if (req.headers.host === 'beep.example.com') {
        bounce(8001);
    }
    else if (req.headers.host === 'boop.example.com') {
        bounce(8002);
    }
    else {
        res.statusCode = 404;
        res.end('no such host');
    }
});
server.listen(8029);
// login

