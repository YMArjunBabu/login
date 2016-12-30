var bouncy = require('bouncy');
var server = bouncy(function (req, res, bounce) {
  console.log(req.headers.host);
    if (req.headers.host === 'http://192.168.1.88:8027') {
        bounce(8026);
    }else {
      res.statusCode = 404;
      res.end('no such host');
    }
});
server.listen(8000);
// login

