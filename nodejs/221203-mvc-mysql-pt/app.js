const express = require('express');

const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname+'static'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


const indexRouter = require('./routes');
const userRouter = require('./routes/user');
app.use('/', indexRouter);
app.use('/user', userRouter);





app.listen(port, () => {
  console.log(port,'번 포트 오픈');
})