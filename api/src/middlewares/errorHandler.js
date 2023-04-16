function errorHandler(erro, req, res, next){
    if(erro.name === "QueryError")
        res.status(400).json({erro: erro.message});
    else
        res.status(500).json({erro: "Erro no servidor"});
}

module.exports = errorHandler;