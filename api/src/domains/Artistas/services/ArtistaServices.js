const Artista = require("../models/Artista");

class ArtistaService{
    /** @brief Cria um artista. */
    async criar(body){
        await Artista.create(body);
    }

    /** @brief Lista todas as músicas de um artista pelo nome do artista. */
    async listarArtista(_nome){
        const artista = await Artista.findOne({where: {nome : _nome}});
        if(!artista)
            throw new Error("Artista não existe");
        else{
            const musicas = artista.getMusicas();
            return musicas;
        }
    }

    /** @brief Atualiza um artista já existente no banco de dados.*/
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

    /**@brief Remove um artista já existente do banco de dados. */
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