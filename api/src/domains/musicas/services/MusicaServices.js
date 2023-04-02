const Musica = require("../models/Musica");

class MusicaServices {
    Pesquisar(nome) {
        const filtro = Musica.filter(Musica => Musica.nome === nome);

        return filtro;
    }
}

module.exports = new MusicaServices();