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

    if (!resultado)
            res.status(404).json("Nenhuma música encontrada");
        else
            res.status(200).json(resultado);
});

//Adiciona uma música à lista
router.post("/adicionar", (req, res) => {
    const musica = MusicaServices.Adicionar(req.body)

    res.status(200).json(musica);
    console.log(Musica);
});

router.put("/atualizar", (req, res) => {
    const musica = MusicaServices.Atualizar(req.body)

    res.status(200).json(musica);
    console.log(Musica);
})

module.exports = router;