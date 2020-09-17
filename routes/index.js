var express = require('express');
const axios = require('axios').default;
const mailer=require('./mail');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/cryptoprice', (req, res) => 
{
    cryptoCurrencyId= req.body.cryptoCurrencyId;
    email= req.body.email;
    var url='https://api.coincap.io/v2/assets/'+cryptoCurrencyId;

    var temp= axios.get(url).then(function (response) {
      price_asset=response.data.data.priceUsd;
      res.send(price_asset);
    })
});


module.exports = router;
