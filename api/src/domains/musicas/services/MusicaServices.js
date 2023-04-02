const listaDeMusicas = require("../models/Musica");
const Musica = require("../models/Musica");

class MusicaServices {
    Pesquisar(nome) {
        const filtro = Musica.filter(Musica => Musica.nome === nome);

        if(!filtro)
                return false;
            else
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

        if(musica == false)
                return false;
            else
                musica.quantidadeDownloads = body.quantidadeDownloads;
                return musica;
    }

    Remover(){

    }
}

module.exports = new MusicaServices();