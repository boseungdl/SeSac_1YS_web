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
//1. 컨트롤러 만들고
//2. 안에 모델 넣고 - 결국 모델이 전부
//3. 모델 안에 맞는 데이터를 찾아야하니까 req.body를 넣고
//4. 데이터를 찾고 작업을 해야하니까 콜백을 넣어 또 그 안에 찾은 데이터를 인수로 넣어준 후 
//5. 응답

exports.delete = (req, res) => {
  Visitor.delete_visitor(req.body.id, function(){  //안에 콜백이 찐 컨트롤러
    res.send(true);
  })
}

exports.get_visitor_by_id = (req, res) => {
  console.log(req.query.id)
  Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    res.send(rows);
  })
}
exports.update_visitor = (req, res) => {
  console.log(req.body)
  Visitor.update_visitor(req.body, function(){
    res.send(true);
  })
}