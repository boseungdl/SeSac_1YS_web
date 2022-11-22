const http = require('http');
const fs = require("fs").promises;

const server = http.createServer(function(req, res){
  fs.readFile("./221029.practice1.html").then(function(data){
    res.end(data)
  })
});//http모듈을 가지고 서버를 만든다 //클라이언트가 접속 했을 떄 안의 콜백을 실행시켜라.

//server.on() : 이벤트 등록
///server.listen() : 서버를 실행하고 클라이언트를 기다린
server.listen(8080, function(){
  console.log("8080포트로 실행")
})