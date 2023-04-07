const sequelize = require("../../../../database/index");
const {DataTypes} = require("sequelize");

const Artista = sequelize.define("Artista", {
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Nacionalidade:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Foto:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

Artista.sync({alter: true, force: false})
    .then(() => {
        console.log("Tabela de artistas foi (re)criadad");
    })
    .catch((erro) => console.log(erro));
    
module.exports = Artista;