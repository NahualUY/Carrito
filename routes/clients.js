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

router.post('/log-in', function(req, res) {
    models.Cliente.find({where: {email: req.body.email, password: req.body.password}}).then(function(cliente){
        cliente.dataValues.password = null;
        cliente.dataValues.edad = (new Date()).getFullYear() - cliente.fecha_de_nacimiento.getFullYear();
        res.send(cliente)
    }).catch(function(error){
        res.status(500).send('error')
    });
});

module.exports = router;