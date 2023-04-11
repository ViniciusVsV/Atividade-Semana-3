const musicaUsuario = require('../models/musicaUsuario');
const Musica = require('../../Musicas/models/Musica');
const Usuario = require("../../Usuarios/models/Usuario");

class musicaUsuarioService{
    async criar(body){
        const musica = await Musica.findByPk(body.MusicaId);
        const usuario = await Usuario.findByPk(body.UsuarioId);
        if(!musica || !usuario)
            throw new Error;
        else{
            await musicaUsuario.create(body);
        }
    }
};

module.exports = new musicaUsuarioService();