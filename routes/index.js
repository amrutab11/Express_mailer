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
    //res.send(cryptoCurrencyId);
    var temp= axios.get('https://api.coincap.io/v2/assets/ethereum').then(function (response) {
       console.log(response);
    })
});


module.exports = router;
