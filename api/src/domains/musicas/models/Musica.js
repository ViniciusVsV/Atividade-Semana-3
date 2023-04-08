const sequelize = require('../../../../database/index');
const {DataTypes} = require('sequelize');

const Musica = sequelize.define('Musica', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  foto:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  titulo:{
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Musica.belongsTo(Artista, {
  constraint: true, //chave estrangeira
  foreignKey: 'idArtista',
});

module.exports = Musica;