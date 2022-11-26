const express = require('express');
const multer = require('multer');
const path = require("path");
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// const upload = multer({
//   dest: 'uploads/'
// })

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done){
      done(null, 'uploads/');
    },
    filename(req, file, done){
      const ext = path.extname(file.originalname); //바나나.jpg
      const filenmae = req.body.id + ext; //123123.jpg
      done(null, filenmae);
    }
  })//diskStorage : 하드 디스크에 저장하는 함수
})



app.get('/pt1',  (req,res) => {
  res.render('pt1');
})
app.post('/upload-pt', upload.single('filept'),  (req,res) => {
  console.log(req.file)
  res.sendFile(`${__dirname}/uploads/${req.file.filename}`)
})













app.get('/file',  (req,res) => {
    res.render('file');
})
app.post('/upload', upload.single('userfile'), (req,res) => { //single안의 인자는 input의 name값이다.
  console.log(req.file); //멀터가 만든거다.
  console.log(req.body);
  res.send("upload Complete");
})
app.post('/upload-array', upload.array('userfile'), (req,res) => { //single안의 인자는 input의 name값이다.
  console.log(req.files); //멀터가 만든거다.
  console.log(req.body);
  res.send("upload Complete");
})
app.post('/upload-fields', upload.fields([{name :'userfile1'}, {name :'userfile2'}, {name :'userfile3'}]), (req,res) => { //single안의 인자는 input의 name값이다.
  console.log(req.files); //멀터가 만든거다.
  console.log(req.body);
  res.send("upload Complete");
})

app.get('/', test, test2, (req,res) => {
  res.send('hello');
});

function test(req, res, next){
  console.log(req.query)
  console.log('test함수입니다.');
  next();
}
function test2(req, res, next){
  console.log(req.query)
  console.log('test2함수입니다.');
  next();
}






app.listen(port, () => {
  console.log('Server Port', port);
})