var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/', function(req, res) {
    var cliente = models.Cliente.build(req.body);
    cliente.save().then(function(){
        res.send('ok')
    }).catch(function(error){
        res.status(500).send('error')
    })
});

module.exports = router;