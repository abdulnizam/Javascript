const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send({"status":"sucess"});
});


app.listen(4000, function(){
  console.log('connected!');
});
