const express = require('express');
const http = require('http');


const app = express();

app.get("/", (req, res) => {
    return res.send('index.html')
});

app.get("/about", (req, res) => {
    return res.send('hello from About page'+ req.query.name);
});

app.listen(8000, ajaj, () => console.log('Servr Started!'))

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log('Servr Started!'))