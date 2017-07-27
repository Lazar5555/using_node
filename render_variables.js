const http = require("http"),
      fs = require("fs");

http.createServer(function(req, res){
  fs.readFile("./index.html", function(err, html){
    var html_string = html.toString();
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    var name = "Eleazar Ponce"

    for(var = variables.length-1; i >= 0; i--){
      var value = eval(variables[i]);
      html_string = html_string.replace("{"+variables[i]+"}", value);
    }

    res.write(html);
    res.end();
  });
}).listen(8080);
