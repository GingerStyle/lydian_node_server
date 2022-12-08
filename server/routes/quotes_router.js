//create - post
//read - get
//update - put
//delete - delete

let express = require('express');
let router = express.Router();
const quoteList = require('../modules/quoteList.js');

router.get('/', function(req, res){
    console.log('request for /quotes was made');
    res.send(quoteList);
    //res.sendStatus(200);
});

router.post('/', function(req, res){
    console.log('in the post request!', req.body);
    if(req.body.text && req.body.author){
        quoteList.push(req.body);
        res.sendStatus(201);
    }else{
        res.sendStatus(500);
    }
});

module.exports = router;