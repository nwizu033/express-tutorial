const express = require('express');
const app = express();

// to listen to a request, we use
app.listen(3000);

// to get a request 
app.get('/', (req,res) => {
   res.send('<h1> Home page</h1>');
});






