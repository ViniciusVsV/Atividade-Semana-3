const Musica = require("../models/Musica");
const Artista = require("../../artistas/models/Artista");

class MusicaServices{
    /** @brief Adiciona uma música ao banco de dados e relaciona ela com um artista já existente.  */
    async criar(body){
        const artista = Artista.findByPk(body.id);
        if(!artista){
            throw new Error("Artista não existente");
        }else
            await Musica.create(body);
    }

    /** @brief Lista todas as músicas do banco de dados.*/
    async listarTodas(){
        const musicas = await Musica.findAll();
        if(!musicas)
            throw new Error("Não há músicas");
        else{
            return musicas;
        }
    }

    /** @brief Retorna todas as músicas que tem o mesmo título informado. */
    async filtrarTitulo(_titulo){
        const musicas = await Musica.findAll({where: {titulo: _titulo}});
        if(!musicas)
            throw new Error("Nenhuma música encontrada");
        else{
            return musicas;
        }
    }

    /** @brief Atualiza uma música já existente no banco de dados. */
    async atualizar(body){
        const musica = await Musica.findByPk(body.id);
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

    /** @brief Remove uma música já existente no banco de dados. */
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