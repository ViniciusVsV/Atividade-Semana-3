const InvalidParamError = require("../../errors/InvalidParamError");

const checkParams = (modelo) => { 
    return async (req, res, next) => {
        try{
            switch (modelo) {
                case "Musica":
                    if(!req.body.foto || !req.body.titulo || !req.body.categoria || !req.body.artistaId)
                        throw new InvalidParamError("Parâmetros Inválidos");
                    if(req.body.foto == null || !req.body.titulo == null || !req.body.categoria == null || !req.body.artistaId == null)
                        throw new InvalidParamError("Parâmetros Inválidos");
                    break;

                case "Artista":
                    if(!req.body.nome || !req.body.nacionalidade || !req.body.foto)
                        throw new InvalidParamError("Parâmetros Inválidos");
                    if(req.body.nome == null|| req.body.nacionalidade == null || req.body.foto == null)
                        throw new InvalidParamError("Parâmetros Inválidos");
                    break;

                case "Usuario":
                    if(!req.body.nome || !req.body.email || !req.body.senha || !req.body.cargo)
                        throw new InvalidParamError("Parâmetros Inválidos");
                    if(req.body.nome == null|| req.body.email == null || req.body.senha == null || req.body.cargo == null)
                        throw new InvalidParamError("Parâmetros Inválidos");
                    break;

                case "musicaUsuario":
                    if(!req.body.MusicaId || !req.body.UsuarioId)
                        throw new InvalidParamError("Parâmetros Inválidos");
                    if(req.body.MusicaId == null|| req.body.UsuarioId == null)
                        throw new InvalidParamError("Parâmetros Inválidos");
                    break;

                        
                default:
                    break;
            }
            next()
        }catch(erro){
            next(erro);
        }
    }
}

module.exports = checkParams;