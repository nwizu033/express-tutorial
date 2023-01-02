const express = require('express');
const app = express();

// to listen to a request, we use
app.listen(3000);

// to get a request and send a file as response
app.get('/', (req,res) => {
    res.sendFile('./pages/index.html', {root: __dirname});
});

app.get('/contact', (req,res) => {
    res.sendFile('./pages/contact.html', {root: __dirname});
});




