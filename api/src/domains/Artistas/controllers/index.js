const router = require('express').Router();
const ArtistaServices = require('../services/ArtistaServices');


//Adiciona um artista ao banco de dados
router.post('/criar', async(req, res) =>{
    const body = req.body;
    try{
        await ArtistaServices.criar(body);
        return res.status(201).json('Artista criado com sucesso!');
    }catch{
        return res.status(400);
    }
});

//Lista todas as músicas de um artista pelo nome do artista
router.get("/listarArtista", async(req, res) => {
    const _nome = req.body.nome;
    try {
        const musicas = await ArtistaServices.listarArtista(_nome);
        res.status(200).json(musicas);
    }catch(erro){
        res.status(404).send(erro);
    }
});

//Atualiza as informações de um artista no banco de dados
router.put("/atualizar", async(req, res) => {
    const body = req.body;
    try{
        await ArtistaServices.atualizar(body);
        res.status(200).json("Artista atualizado");
    }catch(erro){
        res.status(404).send(erro);
    }
});

//Remove um artista do banco de dados e todas as músicas dele
router.delete("/remover", async(req, res) => {
    const id = req.body.id;
    try{
        await ArtistaServices.remover(id);
        res.status(200).json("Artista removido");
    }catch(erro){
        res.status(404).send(erro);
    }
})

module.exports = router;