const Artista = require("../models/Artista");

class ArtistaService{
    async criar(body){
        await Artista.create(body);
    }

    async listarArtista(body){
        const artista = await Artista.findOne({where: {nome : body.nome}});
        if(!artista)
            throw new Error("Artista não existe");
        else{
            const musicas = artista.findAll({where: {idArtista: artista.id}});
            return musicas;
        }
    }

    async atualizar(body){
        const artista = await Artista.findByPk(body.id); //nao está funcionando -> retorna 404 not found, mas atualiza os valores do mesmo jeito
        if(!artista)
            throw new Error("Artista não encontrado");
        else{
            artista = await Artista.update(
                {
                    nome: body.nome,
                    nacionalidade: body.nacionalidade,
                    foto: body.foto
                },
                {
                    where: {id: body.id}
                }
            );
        }
    }

    async remover(id){
        const artista = await Artista.findByPk(id);
        if(!artista)
            throw new Error("Artista não existente");
        else{
            await artista.destroy();
        }
    }
};

module.exports = new ArtistaService();