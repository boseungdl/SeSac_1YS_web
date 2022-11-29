const express = require('express');
const app = express();
const port = 8000;
const mysql = require('mysql');

const cnn = mysql.createConnection({ 
  host: 'localhost', 
  user: 'user', 
  password: 'shkshk12!',
  database: 'sesac_test'
})



app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  cnn.query("select * from user", (err, result) => { 
    if(err) throw err;
    console.log(result);
    res.render('index', {rows: result})
    
  })
})

app.listen(port, () => {
  console.log('open:', port);
})