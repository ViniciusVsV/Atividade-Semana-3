const listaDeMusicas = require("../models/Musica");

class MusicaServices {
    Pesquisar(nome) {
        const filtro = listaDeMusicas.filter(Musica => Musica.nome === nome);

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
    
        listaDeMusicas.push(musica);

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
                listaDeMusicas.splice(index, 1);
                return musica;
                
    }
}

module.exports = new MusicaServices();