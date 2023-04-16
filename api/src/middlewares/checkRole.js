const PermissionError = require("../../errors/PermissionError");

const checkRole = (cargos) => { 
    return async (req, res, next) => {
        try {
            const cargo = await req.usuario.cargo;
            if(!cargos.include(cargo)){
                throw new PermissionError("Acesso não autorizado");
            } next();
        } catch(error){
            next(error);
        }
    }
}

module.exports = checkRole;