//시퀄라이즈 모델을 js로 정의를 해야한다?

const Visitor = (Sequelize, DataTypes) => {
    return Sequelize.define( //있는 거를 정의하는 거다 db에 테이블이 존재하고 있어야한다.
      "visitor", //create table visitor ( 
      {
        id: { //id int not null primary key auto_increment
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {// name varchar(10) not null 
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        comment: { // comment mediumtext
          type: DataTypes.TEXT('medium'),
        }
      },
      {
        tableName: 'visitor',
        freezeTableName: true, //시퀄라이즈는 자동으로 테이블이름을 복수형으로 만들기 때문에 내가 원하는 데로 하기위한 옵션이다.
        timestamps: false, // default true, true면 createAt, modifyAt 등의 컬럼에 자동으로 저장하려한다. - 그런 컬럼이 존재해야한다.
        //collate, charset  - 지금은 db자체에 인코딩이 설정되어있기 때문에 그 하위의 테이블에는 설정을 안 해도 된다.
      }
    )
}

module.exports = Visitor;

