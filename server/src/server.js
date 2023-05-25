const http = require('http');

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        console.log(req.url)
    }

}).listen(3001, 'localhost')