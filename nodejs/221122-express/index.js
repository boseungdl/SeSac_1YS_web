const express = require("express");
const app  = express();
const port = 8080;






app.use('/static', express.static('static'))//스태틱 메서드를 통해 미들웨어 등록 /public은 가상경로다 - 아무거나 써도됨
//static이라는 폴더에 public 경로로 접근할 수 있도록 함
//src="/public/img/cat.jpg"  --> 하위폴더는 자동 접근가능
//app.use(express.static('static'))
app.use(express.urlencoded({extended: true})); //form에도 타입이있다. x-www.urlencoded라는 타입을 갖는 데이터를 해석하겠다. //multi-part같은 타입도 있다.?
app.use(express.json()); //post 요청일 떄 사용하는 것 data를 json형식으로 파싱해주겠다. -> {키: 값}







app.set('view engine', 'ejs')//ejs을 뷰엔진으로 사용하겠다. -> 단순히 확장자만 안써도되는건가?? -> 







app.get('/', (req, res) => {
  res.send('hello epxress');
})

app.get('/ejs', (req, res) => {
  res.render('index', {
    title : 'index 페이지 입니다.',
    data : ["a", 'b', 'c'],
  }); //view 엔진으로 설정을 해놔서 확장자를 안써도 된다.
})

app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/views/index.html'); //무조건 절대경로
})

app.get('/img', (req, res) => {
  res.render('img');
})

app.get("/form", (req, res) => {
  res.render('form');
})


app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render('result', {
    data : req.query
  });
})


app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render('result', {
    data : req.body
  });
})


//실습
app.get("/pt", (req, res) => {
  console.log(req.query);
  res.render('pt');
})



app.get("/pt_result", (req, res) => {
  console.log(req.query);
  res.render('pt_result', {
    data : req.query
  });
})


app.post("/pt_result", (req, res) => {
  console.log(req.body);
  res.render('pt_result', {
    data : req.body
  });
})











app.listen(port, () => {
  console.log("server open :", port);
})




