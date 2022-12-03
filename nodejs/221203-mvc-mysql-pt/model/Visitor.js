const mysql = require('mysql');

const cnn = mysql.createConnection({ 
  host: 'localhost', 
  user: 'user', 
  password: 'shkshk12!',
  database: 'sesac_test'
});


exports.index = (query, cb) => {
  var sql = `select * from user2 where id = '${query.id}'`;

  cnn.query(sql, (err, info) => {
    if (err) throw err;
    console.log(info);

    cb(info)
  })
}
exports.signup = (info, cb) => {
  var sql = `insert into user2(id, pw, name) values('${info.id}', '${info.pw}', '${info.name}')`;

  cnn.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);

    cb()
  })
}
exports.login = (info, cb) => {
  var sql = `select * from user2 where id = '${info.id}'`;


  cnn.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result.length)
    result.length !== 0 ? cb('성공') : cb('실패') 
    
    
  })
}