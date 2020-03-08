const kue = require('kue');
const jobs = kue.createQueue();

function newJob() {
  let job = jobs.create('new_job');
  job.save();
}

jobs.process('new_job', function(job, done){
  console.log('id: '+job.id+'-> done');
  done && done();
})

setInterval(newJob, 3000);
