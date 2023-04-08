const Musica = require("../models/Musica");

class MusicaServices{
    async criacao(body){
        await Musica.create(body);
    }

    async remover(id){
        const musica = await Musica.findByPk(id);
        if(!musica)
            throw new Error("Música não encontrada");
        else{
            await musica.destroy();
        }
    }

    async listarTodas(){
        const musicas = await Musica.findAll();
        if(!musicas)
            throw new Error("Não há músicas");
        else{
            return musicas;
        }
    }
};

module.exports = new MusicaServices();