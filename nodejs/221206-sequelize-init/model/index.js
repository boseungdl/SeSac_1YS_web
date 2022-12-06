const Sequelize = require('sequelize');
const config  = require('../config/config.json')["development"]; //json파일은 확장자를 적어줘야한다.
const db = {};

const sequelize = new Sequelize( //정보를 갖고 db연결
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize; //객체
db.Sequelize = Sequelize; //생성자함수
//나중에 시퀄라이즈 모델이 여기저기 쓰일거기 때문에 중복발생막기위해?

db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);

// db = {
//   "Sequelize" : Sequelize,
//   "sequelize" : sequelize,
//   "Visitor" : Visitor실행한값
// }


module.exports = db;