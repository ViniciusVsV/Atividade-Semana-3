function tratamentoErros(erro, req, res, next){
    if(erro.message == "Nenhuma música encontrada no banco de dados"){
        res.status(400).send("Não há músicas");
    }
    if(erro.message == "Música não encontrada no banco de dados"){
        res.status(400).send("Música não encontrada");
    }
    if(erro.message == "Artista não encontrado no banco de dados"){
        res.status(400).send("Artista não encontrado");
    }
}

module.exports = tratamentoErros;