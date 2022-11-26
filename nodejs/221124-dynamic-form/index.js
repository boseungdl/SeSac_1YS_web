const express = require('express')
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', (req,res) => {
  res.render('index');
})

app.get('/form', (req,res) => {
  console.log(req.query)
  res.send("이름은 : " + req.query.name) 
})

app.get('/pt1', (req, res) => {
  res.render('pt1')
})
app.get('/getForm', (req, res) => {
  console.log(req.query)
  console.log(req.query)
  res.send( {data : req.query})
})
app.get('/pt2', (req, res) => {
  res.render('pt2')
})
app.post('/postForm', (req, res) => {
  console.log(req.body)
  if(req.body.id !== '한승보' || req.body.pw !== '1'){
    res.send( {data : '때앵', color : 'red'} )
  } else {
    res.send({data : '로그인성공', color : 'green'})
  }
  
})

app.listen(port, () => {
  console.log('Server Port', port);
})