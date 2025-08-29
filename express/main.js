const express = require('express');
// const http = require('http'); express also handles https


const app = express();

const path = require("path");

// app.get("/index", (req, res) => {
//     return res.sendFile(path.join(__express, "index.html"));
// });

app.get("/about", (req, res) => {
    return res.send('hello from About page'+ req.query.name);
});

app.listen(8000, () => console.log('Servr Started!'))

