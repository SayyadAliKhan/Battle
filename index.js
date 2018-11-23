const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');

const port = 3000;
const app = express();

let con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "mydb"
});

var executeQuery = function(res, query){
  mysql.connect(function (err) {
    if (err) {
      console.log("Error while connecting database :- " + err);
      res.send(err);
    }
      // query to the database
      con.query(query, function (err, res) {
        if (err) {
          console.log("Error while querying database :- " + err);
          res.send(err);
        }
        else {
          return res;
        }
      });
  });
}

app.get('/list', (req, res) => {
  let query = 'Select location FROM table WHERE location is NOT NULL AND location <> ""';

  var response = executeQuery(res, query);
  res.send();
})

app.get('/count', (req, res) => {

})

app.get('/stats', (req, res) => {

})

app.get('/search', (req, res) => {

  let request = req.query; // req.params
  let attacker_king = request.attacker_king;



})

app.listen(port, () => console.log(`Battle app listening on port ${port}!`))
