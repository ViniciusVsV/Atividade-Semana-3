const router = require('express').Router();
const musicaUsuarioService = require('../services/musicaUsuarioServices');

//Relaciona uma música a um usuário.
router.post('/criar', async(req, res, next) =>{
    const body = req.body;
    try{
        await musicaUsuarioService.criar(body);
        return res.status(201).json('Agora você escuta musicas!');
    }catch(erro){
        next(erro);
    }
});

//Lista todas as músicas que um usuário escuta
router.get("/listarUsuario", async(req, res, next) => {
    const _UsuarioId = req.body.UsuarioId;
    const musicas = await musicaUsuarioService.listarUsuario(_UsuarioId);
    try {
        res.status(200).json(musicas);
    }catch(erro){
        next(erro);
    }
});

module.exports = router;