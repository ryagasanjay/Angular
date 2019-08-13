var http = require('http');
var fs = require('fs');

//TO read the files from the local space
http.createServer(function(req, res) {
    res.write('Hello world again');
    // fs.readFile('index.html', function(err, data) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     res.end();
    // });

    // fs.appendFile('index.html', "new data to append", function(err) {

    //     if (err) throw err;
    //     console.log('saved');
    // })

    fs.appendFile('index.html', "<p> Will this be shown in the html template?</p>", function(err) {

        if (err) throw err;
        console.log("saving again");
    });

}).listen(8080);
