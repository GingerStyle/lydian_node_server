const { publicDecrypt } = require('crypto');
const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public'));

const quoteList = require('./modules/quoteList');

app.listen(port, () => {
    console.log('listening on port', port);
});

//npm start to start server
//control + c on terminal closes the server

//create - post
//read - get
//update - put
//delete - delete

app.get('/quotes', function(req, res){
    console.log('request for /quotes was made');
    res.send(quoteList);
    //res.sendStatus(200);
});


