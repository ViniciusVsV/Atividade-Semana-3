const sequelize = require('../../../../database/index');
const {DataTypes} = require('sequelize');
const Artista =  require('../../artistas/models/Artista');

const Musica = sequelize.define('Musica', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  foto:{
    type: DataTypes.STRING,
    allowNull: false
  },
  titulo:{
    type: DataTypes.STRING,
    allowNull: false
  },
});

Musica.belongsTo(Artista, {
  constraint: true, //chave estrangeira
  foreignKey: 'idArtista',
});

Musica.sync({alter: false, force: false})
    .then(() => {
        console.log('Tabela de Musicas foi (re)criada');
    })
    .catch((err) => console.log(err));

module.exports = Musica;