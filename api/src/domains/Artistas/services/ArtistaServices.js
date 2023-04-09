const Artista = require("../../Artistas/models/Artista");

class ArtistaService{
    async criar(body){
        await Artista.create(body);
    }

    async listarArtista(body){
        const artista = Artista.findOne({where: {nome : body.nome}});
        if(!artista)
            throw new Error("Artista não existe");
        else{
            const musicas = artista.findAll({where: {idArtista: artista.id}});
            return musicas;
        }
    }
};

module.exports = new ArtistaService();