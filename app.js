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
app.get('/about', (req,res) => {
    res.sendFile('./pages/about.html', {root: __dirname});
});

// let's redirect '/contact-us' to '/contact'
app.get('/contact-us',(req,res) =>{
    res.redirect('/');
});

/*404 is usually the last part of routing as express runs the code from 
top to bottom checking paths that match. If the path doesn't match
it now fires the 404 page. we use it thus;
*/
app.use((req,res) =>{
    res.status(404).sendFile('./pages/404.html',{root:__dirname});
});





