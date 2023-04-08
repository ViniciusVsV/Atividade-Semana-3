const Musica = require("../models/Musica");

class MusicaServices{
    async criacao(body){
        await Musica.create(body);
    }

    async listarTodas(){
        const musicas = await Musica.findAll();
        if(!musicas)
            throw new Error("Não há músicas");
        else{
            return musicas;
        }
    }

    async filtrarTitulo(_titulo){
        const musicas = await Musica.findAll({where: {titulo: _titulo}});
        if(!musicas)
            throw new Error("Nenhuma música encontrada");
        else{
            return musicas;
        }
    }

    async atualizar(body){
        const musica = Musica.findByPk(body.id);
        if(!musica)
            throw new Error("Música não encontrada");
        else{
            musica = await Musica.update(
                {
                    foto: body.foto,
                    titulo: body.titulo
                },
                {
                    where: {id: body.id}
                }
            );
        }
    }

    async remover(id){
        const musica = await Musica.findByPk(id);
        if(!musica)
            throw new Error("Música não encontrada");
        else{
            await musica.destroy();
        }
    }
};

module.exports = new MusicaServices();