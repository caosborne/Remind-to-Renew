var User = require('../../models/user.js');
var Item = require('../../models/item.js');
var mongoose = require('mongoose');

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
    auth: {
      user: 'remind2renew@gmail.com',
      pass: 'zxc453ZXC$%#'
    }
  }
);

transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

var mailOptions = {
    from: "remind2renew@gmail.com", // sender address
    to:  "remind2renew@gmail.com",// will be users email that is pulled after seeing they have an alert date
    subject: 'Friendly reminder that you have an Item that needs to be renewed!', // Subject line
    text: "Warning: You're approaching your renew time. Make sure you renew your items. You have selected an alert date to remind yourself about a current item that needs to be renewed. Make sure you renew any items you may have coming up and update them in the tracker. Thanks for choosing Remind 2 Renew." , // plaintext body
};

module.exports = function(agenda) {
//   db.open(function(err, db) {
//     if (!err) {
//         console.log("db opened!");
//     }
//     else {
//         console.log(err);
//     }
//     db.collection('users', function(err, collection) {
//         collection.find({}, function(err, cursor) {
//             cursor.each(function(err, item) {
//                 console.log(item);
//             });
//             db.close();
//         });
//     });
// });



  // console.log(db.collection.find({ "alertDate": { "$gte":"2016-08-18T05:00:00Z", "$lt":"2016-08-29T05:00:00Z" } }));

  agenda.define('reminder email', function(job) { console.log('test');});
    // console.log(User.find({ "alertDate": { "$gte":ISODate("2016-08-18T05:00:00Z"), "$lt": ISODate("2016-08-29T05:00:00Z") } }));
  //
  //
  //   // query database for items.alertDate for any alerts set for the next 12 hours and they haven't already been sent(5 minutes)
  //     // loop through all the items
  //       // go query for the user tied to this item
  //         // send email to user about the reminder && mark that it has been sent in the database
  //
  //
  //
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
  //
  //
  //   // User.get(job.attrs.data.userId, function(err, user) {
  //   //    if(err) return done(err);
  //   //    console.log(err);
  //   //   //  email(user.email(), 'Thanks for registering', 'Thanks for registering ' + user.name(), done);
  //   //  });
  // });

}

// console log all information needed to pull from the DB that will be used in the background process
// get user id from DB and check against users items to see if they have any alerts
// if user has an alert date send alert to users email
// if user received an alert set a boolean to say alert === true if they received an alert email
// after those are done reset the process times to 5 minutes so I can show for demo purposes
