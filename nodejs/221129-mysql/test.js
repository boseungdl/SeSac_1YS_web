const mysql = require('mysql');

const cnn = mysql.createConnection({ //정보에 해당하는 db에 연결시켜주는 메서드
  host: 'localhost', //mysql에 접속할 수 있는 주소 - local에 있는 mysql을 사용하기 떄문에 
  user: 'user', //mysql에도 사용자가 있다. root : 기본사용자(최고권위)
  password: 'shkshk12!',
  database: 'sesac_test'
})

cnn.query("insert into user values('gkstmdqh', 'ss', '한승보', 'm', '1996-07-16', 28)", (err, result) => { //query메서드가 sql문을 실행한다 - sql문이 잘 실행되었을 떄 결과가 result에 담긴다.
  //console.log(err);
  //if(err) console.error(err);
  if(err) throw err;
  console.log(result);
  //root계정으로 접근하지 못하는 이유?머징
})