const Musica = require("../models/Musica");

class MusicaServices {
    Pesquisar(nome) {
        const filtro = Musica.filter(Musica => Musica.nome === nome);

        return filtro;
    }

    Adicionar(body) {
        const musica = {
            nome: body.nome, 
            artista: body.artista,
            genero: body.genero,
            quantidadeDownloads: body.quantidadeDownloads
        }
    
        Musica.push(musica);

        return musica;
    }

    Atualizar(body){
        const musica = this.Pesquisar(body.nome);
        
        musica.quantidadeDownloads = body.quantidadeDownloads;
    }
}

module.exports = new MusicaServices();