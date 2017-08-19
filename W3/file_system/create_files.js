var fs = require('fs');

//Create a new file using apendFile() method
fs.appendFile('mytextfile.txt', 'A new line', function(err){
    if(err) throw err;
    console.log("File saved!");
});

//Creating a new empty file using open()
// fs.open('mytextfile2.txt', 'w', function(err, file){
//     if(err) throw err;
//     console.log("File saved!");
// });

//Creating a new file using writeFile() (will replace the content)
// fs.writeFile('mytextfile3.txt', 'Data to replace', function(err){
//     if(err) throw err;
//     console.log("File saved!");
// });
