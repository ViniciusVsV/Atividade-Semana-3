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
            musica.destroy();
        }
    }
};

module.exports = new MusicaServices();