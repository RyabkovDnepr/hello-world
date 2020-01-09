let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kabadaster@gmail.com',
      pass: 'aA74361907gml'
    }
  });
  
  var mailOptions = {
    from: 'kabadaster@gmail.com',
    to: 'ryabkov.dnepr@gmail.com',
    subject: 'Тут должна быть тема письма',
    text: 'Powered by Node.js :)'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });