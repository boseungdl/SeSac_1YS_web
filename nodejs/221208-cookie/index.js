const express = require('express');
const session = require('express-session')
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');

app.use(session({
  secret: '1234', //임의의 문자열로 세션을 암호화하겠다.
  resave: false, //변경사항이 없어도 변경을 할거냐 - 모든 요청에 세션의 변경이 있지않다 - 로그인시 세션 변경사항있다. 
  //true시에 모든 요청마다 세션에 변화가 없어도 세션을 다시 저장한다.
  saveUninitialized: false, //초기화되지 않은 세션을 저장하냐 마냐
  // cookie: { //세션 id쿠키에 대한 옵션
  //   httpOnly: true,
  // }
  //secure:  //true시에 보안서버에서만 작동
}))

app.get("/", () => {
  //(req.session.user) ? res.render("index", {isLogin: true}) : res.render("index", {isLogin: false})
  res.send("세션 수업")
})

app.get("/setSession", (req, res) => {
  //cookies = {}
  //req.session = {}
  if(req.body.id == user.id && req.body.pw == user.pw){
    req.session.user = req.body.id; //session.id 제외한 아무거나 설정해라 // 클라이언트마다 고유의 세션아이디를 갖고 있다. 서버는 그걸로 클라이언트를 구분 - 그래서 req.session으로 접근한다.id && req.body.pw == user.pw){
    res.send('로그인 성공');
  } else {
    res.send('로그인 실패')
  }
})

app.delete("/logout", (req, res) => {
  req.session.destroy(function(err){
    if(err) throw err;
    res.send("로그아웃 성공")
  })
})



app.listen(port, () => {
  console.log("server open", port)
})