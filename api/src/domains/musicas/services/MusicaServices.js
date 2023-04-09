const Musica = require("../models/Musica");
const Artista = require("../../Artistas/models/Artista");

class MusicaServices{
    async criar(body){
        const artista = Artista.findByPk(body.id);
        if(!artista){
            throw new Error("Artista não existente");
        }else
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