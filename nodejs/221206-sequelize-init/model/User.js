const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      gender: {
        type: DataTypes.ENUM(['f', 'm'])
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: 'user',
      freezeTableName: true,
      timestamps: false
    }
  )
}

module.exports = User;