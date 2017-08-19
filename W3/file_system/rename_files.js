var fs = require('fs');

fs.rename('mytextfile.txt', 'myNewtextfile.txt', function(err){
    if(err) throw err;
    console.log("File renamed!");
});
