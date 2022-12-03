const Visitor = require('../model/Visitor')

var session = [];

exports.login = (req, res) => {
  res.render('login')
}
exports.signup = (req, res) => {

  res.render('signup')
}
exports.index = (req, res) => {
  Visitor.index(req.query, function(info){
    console.log(info)
    res.render('index', {info : info});
  })
}
exports.user_signup = (req, res) => {
  console.log(req.body)
  Visitor.signup(req.body, function(){
    res.send(true);
  })
}
exports.user_login = (req, res) => {
  console.log(req.body)
  Visitor.login(req.body, function(result){
    session.push(req.body.id)
    res.send(result)
  })
}
