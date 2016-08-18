// var email = require('some-email-lib'); //this needs to be emailJS
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
// var sgTransport = require('nodemailer-sendgrid-transport');
var User = require('../../models/user.js');
var Item = require('../../models/item.js');

// var options = {
//     auth: {
//         api_user: 'SENDGRID_USERNAME',
//         api_key: 'SENDGRID_PASSWORD'
//     }
// }
//
//
// var mailer = nodemailer.createTransport(sgTransport(options));
// create reusable transporter object using the default SMTP transport
// var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// var email = {
//     to: '', // will be users email that is pulled after seeing they have an alert date
//     from: 'remind2renew@tacos.com',
//     subject: 'Hi there',
//     text: 'Awesome sauce',
//     html: '<b>Awesome sauce</b>'
// };
//
// mailer.sendMail(email, function(err, res) {
//     if (err) {
//         console.log(err)
//     }
//     console.log(res);
// });

var transporter = nodemailer.createTransport(
    smtpTransport('smtps://remind2renew@gmail.com:zxc453ZXC$%#@smtp.gmail.com')
);

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "remind2renew@gmail.com", // sender address
    to:  "chris.a.osborne@gmail.com",// will be users email that is pulled after seeing they have an alert date
    subject: 'Friendly reminder that you have an Item that needs to be renewed!', // Subject line
    text: "Warning: You're approaching your renew time. Make sure you renew your items. You have selected an alert date to remind yourself about a current item that needs to be renewed. Make sure you renew any items you may have coming up and update them in the tracker. Thanks for choosing Remind 2 Renew." , // plaintext body
    // html: '<b>Hello world 🐴</b>' // html body
};

// send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });

// $.ajax({
//   url: '/email',
//   method: "GET",
//   dataType: "json"
// })
// .done(function(data){
//   console.log(data)
//   var itemData = {certs: data};
// }.bind(this))
//   .fail(function(error){
//     console.log(error);
//   })
// }


module.exports = function(agenda) {
  agenda.define('reminder email', function(job) {
    // console.log(itemData);
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
    // User.get(job.attrs.data.userId, function(err, user) {
    //    if(err) return done(err);
    //    console.log(err);
    //   //  email(user.email(), 'Thanks for registering', 'Thanks for registering ' + user.name(), done);
    //  });
  });

}

// console log all information needed to pull from the DB that will be used in the background process
// get user id from DB and check against users items to see if they have any alerts
// if user has an alert date send alert to users email
// if user received an alert set a boolean to say alert === true if they received an alert email
// after those are done reset the process times to 5 minutes so I can show for demo purposes
