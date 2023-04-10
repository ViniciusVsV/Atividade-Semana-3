const {DataTypes} = require('sequelize');
const sequelize = require('../../../../database/index');

const Usuario = sequelize.define('Usuario', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  const Musica = sequelize.define('Musica', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
const musicaUsuario = sequelize.define('musicaUsuario', {
    musicaId: {
        type: DataTypes.INTEGER, 
        references: {
            model: Musica,
            key: 'id'
        }
    },
    usuarioId: {
        type: DataTypes.INTEGER, 
        references: {
            model: Usuario,
            key: 'id'
        }
    },
}); 



Usuario.belongsToMany(Musica, {through: musicaUsuario});
Musica.belongsToMany(Usuario, {through: musicaUsuario});

musicaUsuario.sync({alter: false, force: false})
    .then(() => {
        console.log('Tabela musicaUsuario foi (re)criada');
    })
    .catch((err) => console.log(err));

module.exports = musicaUsuario;