const express = require("express");
const router = express.Router();
const MusicaServices = require("../services/MusicaServices");
const errorHandler = require("../../../middlewares/errorHandler");

//Adiciona uma música ao banco de dados
router.post('/criar', async(req, res, next) =>{
    const body = req.body;
    try{
        await MusicaServices.criar(body);
        res.status(201).json('Música criada com sucesso!');
    }catch(erro){
        next(erro);
    }
});

//Lista todas as músicas no banco de dados
router.get("/listarTodas", async(req, res, next) => {
    try {
        const musicas = await MusicaServices.listarTodas();
        res.status(200).json(musicas);
    } catch(erro) {
        next(erro);
    }
});

//Filtra o banco de dados pelo id passado
router.get("/listarID", async(req, res, next) => {
    const id = req.body.id;
    try{
        const musicas = await MusicaServices.filtrarID(id);
        res.status(200).json(musicas);
    } catch(error) {
        return next(error);
    }
});

//Pegar um artista pelo id da musica
router.get("/pegarArtista", async(req, res, next) => {
    const id = req.body.id;
    try {
        const artista = await MusicaServices.pegarArtista(id);
        res.status(200).json(artista);
    }catch(erro){
        next(erro);
    }
});

//Atualiza as informações de uma música no banco de dados
router.put("/atualizar", async(req, res, next) => {
    const body = req.body;
    try {
        await MusicaServices.atualizar(body);
        res.status(200).json("Música atualizada");
    } catch(erro) {
        next(erro);
    }
});

//Remove uma música do banco de dados pelo id
router.delete("/remover", async(req, res, next) => {
    const id = req.body.id;
    try{
        await MusicaServices.remover(id);
        res.status(200).json("Música removida");
    }catch(erro){
        next(erro);
    }
});

router.use(errorHandler);

module.exports = router;