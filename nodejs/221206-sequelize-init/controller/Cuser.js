const {User} = require("../model");

exports.user_register = (req, res) => {
  console.log(req.body)
    User.create(req.body)
    .then((result) => {
      console.log(result)
      res.send(true);
    })
}
exports.user_login = async (req, res) => {
  console.log(req.body);
  let result = await User.findOne({
    where: {
      id: req.body.id
    }
  })
  console.log(result)
  result ? res.send(true) : res.send(false) 
}
exports.user_update = async (req, res) => {
  console.log(req.body)
  let data = {
    id : req.body.id,
    pw : req.body.pw
  }
  // User.update(data, {
  //     where: {
  //         id : req.body.hidden
  //     }
  // })
  // .then((result) => {
  //     console.log(result);
  //     res.send(true);
  // })
  let result = await User.update(data, {
    where: {
      id: req.body.hidden
    }
  })
  console.log(result)
  res.send(result)
}