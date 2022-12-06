// const Visitor = require("../model/Visitor");
const {Visitor} = require("../model");


exports.visitor = async (req, res) => {
    let result = await Visitor.findAll();
    res.render("visitor", {data: result});
    // Visitor.findAll()
    // .then((result) => {
    //     console.log(result);
    //     console.log("id :", result[0].id);//dataValues생략가능
    //     res.render("visitor", {data: result})
    // })
    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })
}

exports.register = async (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }
    // let result = await Visitor.create(data)
    // res.send(result);
    Visitor.create(data)
    .then((result) => {
        console.log(result)
        res.send(String(result.id));
    })


    //`insert into visitor(name, comment) values('${req.body.name}', '${req.body.comment}')`;
    // Visitor.register_visitor( req.body, function(id){
    //     console.log(id);
    //     res.send(String(id));
    // })
}

exports.delete = (req, res) => {
    // mysql req.body.id에 해당하는 데이터를 delete
    // 서버 응답 res.send 

    Visitor.destroy({
        where: {
            id: req.body.id
        }
    })
    .then((result) => {
        console.log(result);
        res.send(true)
    })

    //delete from visitor where id = ${req.body.id}
    // Visitor.delete_visitor(req.body.id, function(){
    //     res.send(true);
    // })
}

exports.get_visitor_by_id = async (req, res) => {
    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    let result = await Visitor.findOne({
        where: { id: req.query.id }
    })
    res.send(result);
    // .then((result) => {
    //     console.log("get_visitor_by_id", res);
    //     res.send(result);
    // })
    //select * from visitor where id = req.query.id
    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
}

exports.update_visitor = (req, res) => {
    // req.body 데이터를 mysql 에 update 할 수 있도록
    // 서버의 응답 
    let data = {
        name: req.body.name,
        comment: req.body.comment,
    }
    Visitor.update(data, {
        where: {
            id : req.body.id
        }
    })
    .then((result) => {
        console.log(result);
        res.send(true);
    })
    //update visitor set name= '${req.body.name}', comment= '${req.body.comment}'where id = ${req.body.id}
    // Visitor.update_visitor(req.body, function(){
    //     res.send(true);
    // });
}