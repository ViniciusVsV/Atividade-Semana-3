const musicaUsuario = require('../models/musicaUsuario');

class musicaUsuarioService{
    async criar(body){
        await musicaUsuario.create(body);
    }
};

module.exports = new musicaUsuarioService();