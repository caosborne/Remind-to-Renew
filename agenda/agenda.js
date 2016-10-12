require('dotenv').load();
var Agenda = require('agenda');

var agenda = new Agenda({
  db: {
    address: process.env.DB_CONNECT,
    collection: "agendaJobs"
  }
});

var email = require('./jobs/email')(agenda);

agenda.on('ready', function() {
    var job = agenda.schedule('in 10 seconds', 'reminder email');
    job.repeatEvery('1 second');
    job.save();
    agenda.start();
});

function graceful() {
  agenda.stop(function() {
    process.exit(0);
  });
}

process.on('SIGTERM', graceful);
process.on('SIGINT' , graceful);

module.exports = agenda;


// this is the instance that processes email jobs
// JOB_TYPES=email node worker.js


// agenda.processEvery('12 hours');
