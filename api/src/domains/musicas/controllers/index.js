const express = require("express");
const router = express.Router();
const Musica = require("../models/Musica");
const MusicaServices = require("../services/MusicaServices");

//Retorna todas as músicas da lista
router.get("/listarTodas", (req, res) => {
    res.status(200).send(Musica);
});

//Filtra a lista de músicas por um nome passado
router.get("/pesquisar", (req, res) => {
    const resultado =  MusicaServices.Pesquisar(req.query.nome);
    try {
        
        res.status(200).json(resultado);
    } catch (error) {
        res.status(404).json(error);
    }
});

//Adiciona uma música à lista
router.post("/adicionar", (req, res) => {
    const musica = MusicaServices.Adicionar(req.body)

    res.status(200).json(musica);
    console.log(Musica);
});

//Edita a contagem de downloads de uma música
router.put("/atualizar", (req, res) => {
    const musica = MusicaServices.Atualizar(req.body)

    if(musica == false)
            res.status(404).send("Música não encontrada");
        else
            res.status(200).json(musica);
            console.log(Musica);
});

//Remove uma música da lista
router.delete("/remover", (req, res) => {
    const musica = MusicaServices.Remover(req.body);

    try {
        res.status(200).json(musica);
        console.log(Musica);
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;