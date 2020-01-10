let http = require('http');
let fs = require('fs');
let index = fs.readFileSync('index.html');

http.createServer(function(req, res) {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    }
    else if (req.url === '/about') {
        console.log(req);
        res.write('Check Server console to view request info')
        res.end();
    }
    else if (req.url === '/contact') {
        res.write(index);
        res.end();
    }
}).listen(3000, function(){
    console.log('Server is succesfully created!');
    console.log('To view main page visit http://localhost:3000 or http://127.0.0.1:3000');
})