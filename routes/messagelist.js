var express = require('express');

const Message = require('../models/messageObj.js');
var router = express.Router();

//gets a list of customers by the custid passed in (or id if they themselves are customers)
router.get('/:id',function(req, res,next){
    var qid = req.query.custid != null ? req.query.custid : req.params.id;
    Message.find({
        messageTo : qid
    }).then(function(messages){
        res.render('messagelist.pug',{message :  messages, name : qid});
    });
});


module.exports = router;