const http = require("http"),
      fs = require("fs");

http.createServer(function(req, res){
  fs.readFile("./index.html", function(err, html){
    res.writeHead(200, {
      'content-type': 'application/json'
    })
    res.write(html);
    res.end();
  });
}).listen(8080);
