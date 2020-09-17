const nodemailer = require('nodemailer');

var sendMail=function (mailData,callback){
    const transporter = nodemailer.createTransport({
        host: 'server65.web-hosting.com',
        port: 465,
        secure: true,
        auth: {
          user: 'devuser@chainworks.io',
          pass: 'DevUser#6789'
        }
      });
      
      const recipientEmail = mailData.recepient;
      const assetId = mailData.assetId;
      const price = mailData.priceasset;
      const html = `<div>Hello!<br/><br/>The price of the asset <strong>${assetId}</strong> you requested is <strong>${price}</strong><br/><br/>Thank you for using the CryptoPrice service!</div>`
      
      
      const mailOptions = {
        from: 'Crypto Mailer <devuser@chainworks.io>',
        to: recipientEmail,
        subject: `Crypto Price Service - ${assetId}`,
        html: html
      };
      
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('ERROR SENDING MAIL');
          console.log(error);
          process.exit(1);
        }
        console.log('MAIL SENT SUCCESSFULLY!')
        console.log(info);
        process.exit(0);
      });
}

module.exports.sendMail=sendMail;