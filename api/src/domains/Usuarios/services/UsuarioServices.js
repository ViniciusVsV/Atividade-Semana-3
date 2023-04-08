const Usuario = require('../models/Usuario');

class UsuarioService{
    async criacao(body){
        await Usuario.create(body);
    }

    async atualizar(body){
        const usuario = Usuario.findByPk(body.id);
        if(!usuario)
            throw new Error("Usuário não encontrada");
        else{
            usuario = await Usuario.update(
                {
                    nome: body.nome,
                    email: body.email,
                    senha: body.senha,
                    cargo: body.cargo
                },
                {
                    where: {id: body.id}
                }
            );
        }
    }
};

module.exports = new UsuarioService();