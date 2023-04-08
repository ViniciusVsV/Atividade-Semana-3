const Sequelize = require('sequelize');
const database = require('../../../../database');

const musicaUsuario = database.define('musicaUsuario', {
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
}); 

module.exports = musicaUsuario;