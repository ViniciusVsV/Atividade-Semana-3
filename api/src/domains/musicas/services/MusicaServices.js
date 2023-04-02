const Musica = require("../models/Musica");

class MusicaServices {
    Pesquisar(nome) {
        const filtro = Musica.find(Musica => Musica.nome === nome);

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

    Remover(body){
        const musica = this.Pesquisar(body.nome);
        const index = Musica.indexOf(musica);

        if(musica == false)
                return false;
            else
                Musica.splice(index, 1);
                return musica;
                
    }
}

module.exports = new MusicaServices();