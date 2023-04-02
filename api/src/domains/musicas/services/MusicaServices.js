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
        const index = listaDeMusicas.indexOf(musica);

        if(musica == false)
                return false;
            else
                listaDeMusicas.at(index).quantidadeDownloads = body.quantidadeDownloads;
                return musica;
    }

    Remover(body){      //
        const musica = this.Pesquisar(body.nome);
        const index = listaDeMusicas.indexOf(musica);

        if(musica == false)
                return false;
            else
                listaDeMusicas.splice(index);
                return musica;
                
    }
}

module.exports = new MusicaServices();