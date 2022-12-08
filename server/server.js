const { publicDecrypt } = require('crypto');
const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public'));

//this is needed to send data from the front end to the back end
app.use(express.urlencoded());

//you can drop the .js because it is being imported into a .js file
const quoteRouter = require('./routes/quotes_router.js');

app.use('/quotes', quoteRouter);

app.listen(port, () => {
    console.log('listening on port', port);
});

//npm start to start server
//control + c on terminal closes the server