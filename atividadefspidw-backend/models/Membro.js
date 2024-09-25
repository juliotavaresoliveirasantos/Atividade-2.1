const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definir o modelo de Membro
const Membro = sequelize.define('Membro', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING(11),
    allowNull: false,
    unique: true // Restrições para garantir que o CPF seja único
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Membro;
