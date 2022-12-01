const Test = require('../model/Test');

exports.main = (req, res) => {
  //let user = Test.hello();
  res.render('index')
  // res.render('index');
}
exports.test = (req, res) => {
  res.send('test');
}
exports.post = (req, res) => {
  res.send('post');
}
exports.login = (req, res) => {
  let user = Test.hello();
  console.log(user)
  console.log(req.body)
  if(user.id === req.body.id && user.pw === req.body.pw){
    res.json({st: 200, message:'로그인성공'})
  } else {
    res.json({sts: 404, message:'잘못입력하심'})
  }
}
exports.login2 = (req, res) => {
  const User = Test.user().split('\n')
  let a = [];
  const b = [];
  User.forEach((u,i) => {
    c = u.split('//');
    b[i] = {};
    b[i].id = c[0];
    b[i].pw =  c[1];
    b[i].name = c[2];
  })
  console.log(b)
  res.render('login', {b: b})
}

// {
//   main: main,
//   test: test,
//   post: post
// } require시에 이런식으로 저장이 된다. 한 번에 