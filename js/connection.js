var mysql = require('mysql');

var con = mysql.createConnection({
  host: "freniz.cmhh9tkn7vpo.eu-west-1.rds.amazonaws.com",
  user: "freniz",
  password: "Ajith786"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
