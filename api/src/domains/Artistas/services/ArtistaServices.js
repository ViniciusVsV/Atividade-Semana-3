const Artista = require('../models/Artista');

class ArtistaService{
    async criar(body){
        await Artista.create(body);
    }
};

module.exports = new ArtistaService();