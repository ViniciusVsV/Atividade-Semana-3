const Musica = require("../models/Musica");

class MusicaServices{
    async criacao(body){
        await Musica.create(body);
    }
};

module.exports = new MusicaServices();