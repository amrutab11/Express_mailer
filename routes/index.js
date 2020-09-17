var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/cryptoprice', (req, res) => 
{
    cryptoCurrencyId= req.body.cryptoCurrencyId;
    email= req.body.email;
    res.send(cryptoCurrencyId);
});


module.exports = router;
