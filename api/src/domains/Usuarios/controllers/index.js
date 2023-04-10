const router = require('express').Router();
const Usuario = require('../models/Usuario');
const UsuarioService = require('../services/UsuarioServices');

//Adiciona um usuário ao banco de dados
router.post('/criar', async(req, res) =>{
    const body = req.body;
    try{
        await UsuarioService.criar(body);
        return res.status(201).json('Usuario criado com sucesso!');
    }catch(error){
        return res.status(404).send(error);
    }
});

//Atualiza as informações de um usuário no banco de dados
router.put("/atualizar", async(req, res) => {
    const body = req.body;
    try {
        await UsuarioService.atualizar(body);
        res.status(200).json("Usuário atualizado");
    } catch(error) {
        res.status(404).send(error);
    }
});

router.delete("/remover", async(req, res) => {
    const id = req.body.id;
    try{
        await UsuarioService.remover(id);
        res.status(200).json("Usuário excluído");
    } catch(error) {
        res.status(400).send(error);
    }
}); 

module.exports = router;