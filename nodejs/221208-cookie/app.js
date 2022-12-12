const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');
const session = require('express-session')

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());//쿠키파서가 쿠키를 사용할 수 있게 해준 후(req.cookie를 쓸 수 있게해준다) next
app.use(session({
  secret: '1234', 
  resave: false, 
  saveUninitialized: false, 
}))
const user = {
  id : 'tmdqh',
  pw : '123'
}

const option = {
  httpOnly: true, //쿠키는 브라우저에 저장되기 때문에 js로 접근을 할 수 있다. -> document.cookies //true면 접근해도 보이지 않는다. 
  maxAge: 3000,//현재 만들어진 순간부터 적혀진 초만큼 뒤에 만료 (ms단위) //3000이면 3초뒤 만료  
  //expire: "2022-12-09T09:00:00", //GMT시간 - 2022-12-08T09:00:00 이런식으로 적어서 만료일을 정할 수 있다. 
  //path: "/", // localhost:8000에서는 쿠키가 없다. / a뒤에 어떤게 와도 쿠키를 보내준다. // default: "/"
  //secure: false, //https라는 보안서버에만 적용이 된다.
  //signed: false, //쿠키를 암호화할거니? default: false
}

app.get("/", (req, res) => {
  console.log(req.cookies.popup)
  console.log(req.cookies)
  res.render("index", {data: req.cookies})
})

app.get("/login", (req, res) => {
  res.render('login')
})
app.post("/login", (req, res) => {
  console.log(req.body)
  if(req.body.id == user.id && req.body.pw == user.pw){
    req.session.user = req.body.id
    res.send('main');
  } else {
    res.send('main');
  }
  
})
app.post("/popupclose", (req,res) => {
  res.cookie("popup", "0", option);
  res.send(true);
})

app.get("/set", (req, res) => {
  res.cookie("test", "0", option)
  res.send("he")
})
app.get("/main", (req, res) => {
  //res.cookie("test", "0", option)
  //res.render("main",{data: req.cookies})
  req.session.user ? res.render("main", {islogin : true}) : res.render("main", {islogin : false});
})
app.delete("/logout", (req, res) => {
  req.session.destroy(function(err){
    if(err) throw err;
    res.send("login")
  })
})

app.listen(port, () => {
  console.log(`${port}번 포트 open`)
})