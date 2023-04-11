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

    async listarUsuario(_UsuarioId){
        const usuario = await musicaUsuario.findAll({where: {UsuarioId: _UsuarioId}});
        var musicas = new Array(usuario.length);
        if(!usuario)
            throw new Error;
        else{
            for(let i = 0; i < usuario.length; i++)
                musicas[i] = await Musica.findByPk(usuario[i].MusicaId);
            return musicas;
        }
    }
};

module.exports = new musicaUsuarioService();