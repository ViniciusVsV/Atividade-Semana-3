const Usuario = require('../models/Usuario');

class UsuarioService{
    async criar(body){
        if (body.cargo != 'admin' && body.cargo != 'user') 
            throw new Error("Cargo inválido");
        else {
            await Usuario.create(body);
        }
    }

    async atualizar(body){
        const usuario = Usuario.findByPk(body.id);
        if(!usuario)
            throw new Error("Usuário não encontrado");
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

    async remover(id){
        const usuario = await Usuario.findByPk(id);
        if(!usuario)
            throw new Error("Usuário não encontrado");
        else{
            await usuario.destroy();
        }
    }
};

module.exports = new UsuarioService();