const express = require("express");
const router = express.Router();
const Musica = require("../models/Musica");
const MusicaServices = require("../services/MusicaServices");

//Adiciona uma música ao banco de dados
router.post('/criar', async(req, res) =>{
    const body = req.body;
    try{
        await MusicaServices.criar(body);
        res.status(201).json('Música criada com sucesso!');
    }catch(erro){
        res.status(400).send(erro);
    }
});

//Lista todas as músicas no banco de dados
router.get("/listarTodas", async(req, res) => {
    try {
        const musicas = await MusicaServices.listarTodas();
        res.status(200).json(musicas);
    } catch(erro) {
        res.status(404).send(erro);
    }
});

//Filtra o banco de dados pelo título passado
router.get("/listarTitulo", async(req, res) => {
    const titulo = req.body.titulo;
    try{
        const musicas = await MusicaServices.filtrarTitulo(titulo);
        res.status(200).json(musicas);
    } catch(error) {
        res.status(404).send(error);
    }
});

//Atualiza as informações de uma música no banco de dados
router.put("/atualizar", async(req, res) => {
    const body = req.body;
    try {
        await MusicaServices.atualizar(body);
        res.status(200).json("Música atualizada");
    } catch(erro) {
        res.status(404).send(erro);
    }
});

//Remove uma música do banco de dados pelo id
router.delete("/remover", async(req, res) => {
    const id = req.body.id;
    try{
        await MusicaServices.remover(id);
        res.status(200).json("Música removida");
    }catch(erro){
        res.status(404).send(erro);
    }
});

module.exports = router;