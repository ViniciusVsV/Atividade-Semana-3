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

    async atualizar(body){
        const artista = Artista.findByPk(body.id);
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
};

module.exports = new ArtistaService();