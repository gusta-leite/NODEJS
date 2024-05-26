const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../bdConexao')
const usuario = new require('./usuario')
const pet = new require('./pet')
class Doacao extends Model{}
Doacao.init({
    data_interesse: {
        type:Sequelize.DATEONLY,
        defaultValue: DataTypes.NOW
      },
      data_doacao:{
        type:Sequelize.DATEONLY,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        defaultValue:"Cadastrada"
      }
    },{
      sequelize,
      modelName:'doacoes'
    }
  )
  pet.hasMany(Doacao)
  Doacao.belongsTo(pet)

  usuario.hasMany(Doacao)
  Doacao.belongsTo(usuario)
  sequelize.sync()
   module.exports = Doacao