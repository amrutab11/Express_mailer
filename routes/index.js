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
      
      var mailData={
        recepient:email,
        assetId:cryptoCurrencyId,
        priceasset : price_asset
      }
      mailer.sendMail(mailData,(cb)=>{
        if(cb.success){
          res.status(200).json({success:true, message:"Email has been sent"});
        }else{
          res.status(500).jos({
            success:false,
            message: cb.message
          });
        }
      });
    })
});


module.exports = router;
