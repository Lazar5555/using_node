var http = require('http');
//var dt = require('./myfirstmodule.js');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    //res.write("The date and the time are currently: " + dt.myDateTime() + "\n");
    //res.write(req.url);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen("8080");
