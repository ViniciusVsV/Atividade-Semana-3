const Musica = require("../models/Musica");

class MusicaServices{
    async criacao(body){
        await Musica.create(body);
    }

    async leitura(){
        if(!Musica)
            throw new Error("Nenhuma música existente");
        else{
            const musicas = Musica.findAll();
            return musicas;
        }
    }

    async remover(id){
        const musica = await Musica.findByPk(id);
        if(!musica)
            throw new Error("Música não encontrada");
        else{
            musica.destroy();
        }
    }
};

module.exports = new MusicaServices();