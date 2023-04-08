const Usuario = require('../models/Usuario');

class UsuarioService{
    async criacao(body){
        await Usuario.create(body);
    }
};

module.exports = new UsuarioService();