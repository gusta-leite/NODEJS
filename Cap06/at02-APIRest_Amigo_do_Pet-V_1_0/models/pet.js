const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bdConexao')
const usuario = new require('./usuario')
class Pet extends Model{}

Pet.init({
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      sexo: {
        type: DataTypes.STRING(1),
        allowNull:false
      },
      especie: {
        type: DataTypes.STRING(50),
        allowNull:false
      },
      raca: {
        type: DataTypes.STRING(50),
        allowNull:true
      },
      peso: {
        type: DataTypes.INTEGER,
        allowNull:true
      },
      tamanho: {
        type: DataTypes.STRING(10),
        allowNull:false
      },
      idade: {
        type: DataTypes.INTEGER,
        allowNull:true
      },
      doenca: {
        type: DataTypes.STRING,
        allowNull:true
      },
      obs: {
        type: DataTypes.STRING,
        allowNull:true
      }
},{
    sequelize,
    modelName:'pet'
  }
)
usuario.hasMany(Pet)
Pet.belongsTo(usuario) 
sequelize.sync()
 module.exports = Pet  
