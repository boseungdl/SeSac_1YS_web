const Visitor = require('../model/Visitor')

exports.visitor = (req, res) => {
  Visitor.get_visitor(function(result){ //비동기 때문에 모델이 먼저 실행되고 완료된 후에 콜백으로 controller가 실행이된다.
    res.render('visitor', {data: result});
  })
}

exports.register = (req, res) => {
  //insert req.body
  Visitor.register_visitor(req.body, function(id){ //model에서 받은 결과값을 콜백함수에서 받아야해 매개변수를 만들어준다.
    res.send(String(id));
  })
}