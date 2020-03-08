const express = require('express');
const mysql = require('mysql');
const app = express();

class DatabaseMySQL {

    constructor(db) {

        const stringConexaoDB = {host:'freniz.cmhh9tkn7vpo.eu-west-1.rds.amazonaws.com', user:'freniz', password:'freniz786', database:db}

        this.connection = mysql.createConnection(stringConexaoDB);

        console.log('Connected', db);

    }


    query(sql, args) {

        return new Promise((resolve, reject) => {

            this.connection.query(sql, args, (err, rows) => {

                if (err) return reject(err);

                resolve(rows);

            })

        })

    }


    close() {

        return new Promise((resolve, reject) => {

            this.connection.end(err => {

                if(err) return reject(err);

                resolve();

            })

        })

    }

}

app.get('/', function(req, res) {

  db = new DatabaseMySQL('islam_spotlight');

  db.query('SELECT * FROM Quran right join AyahTitle on Quran.SuraID = AyahTitle.ID')

  .then(rows => {
       res.send({"result": rows});
       db.close();

  })

  .catch((error) => {

      console.log(error)

     db.close();

 })

});

app.listen(4000, function(){
  console.log('connected!');
});
