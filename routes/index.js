var express = require('express');
const axios = require('axios').default;

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
      res.send(response.data.data.priceUsd);
    })
});


module.exports = router;
