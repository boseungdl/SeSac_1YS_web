const mysql = require('mysql');

const cnn = mysql.createConnection({ 
  host: 'localhost', 
  user: 'user', 
  password: 'shkshk12!',
  database: 'sesac_test'
});

exports.get_visitor = (cb) => {
  var sql = 'select * from visitor';

  cnn.query(sql, (err, rows) => { //비동기다 - 오래걸림 
    if(err) throw err;
    console.log('visitors: ', rows);
    cb(rows);
  })
}

exports.register_visitor = (info, cb) => { //콜백이 컨트롤
  var sql = `insert into visitor(name, comment) values('${info.name}', '${info.comment}')`;

  cnn.query(sql, (err, result) => {
    if(err) throw err;
    console.log('insert result: ', result);
    
    cb(result.insertId);
  })
}

