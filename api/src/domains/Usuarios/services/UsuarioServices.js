const Usuario = require('../models/Usuario');

class UsuarioService{
    /** @brief Cria um usuário em que o cargo só pode ser admin ou user.*/
    async criar(body){
        if (body.cargo != 'admin' && body.cargo != 'user') 
            throw new Error("Cargo inválido");

        await Usuario.create(body);
    } 
    /** @brief Atualiza um usuário já existente.*/
    async atualizar(body){
        let usuario = Usuario.findByPk(body.id);
        if(!usuario)
            throw new QueryError("Usuário não encontrado");

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

    /** @brief Remove um usuário.*/
    async remover(id){
        const usuario = await Usuario.findByPk(id);
        if(!usuario)
            throw new QueryError("Usuário não encontrado");

        await usuario.destroy();
    }
};

module.exports = new UsuarioService();