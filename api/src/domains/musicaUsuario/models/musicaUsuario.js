const {DataTypes} = require('sequelize');
const sequelize = require('../../../../database/index');

const Usuario = sequelize.define('Usuario', {nome: sequelize.DataTypes.STRING});
const Musica = sequelize.define('Musica', {nome: sequelize.DataTypes.STRING});

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

module.exports = musicaUsuario;