const Artista = require('../models/Artista');

class ArtistaService{
    async criacao(body){
        await Artista.create(body);
    }
};

module.exports = new ArtistaService();