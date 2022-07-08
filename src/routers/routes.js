const express = require('express');

const router = express.Router();

router.get('/servico/:nome?', (req, res) => {
    const nome = req.params.nome;
    const servicos = {
        "validar_CPF": "http://localhost:3001/cpf",
        "calcular_IMC": "http://localhost:3002/imc",
    };
    if(nome) {
        if(servicos[nome]) {
            return res.json({"URL" : `${servicos[nome]}`});
        }
        else {
            return res.status(400).json({"Error": "Esse serviço não existe no nosso servidor"});
        }
    }
    return res.status(400).json({'Error': 'Insira o nome do serviço'});
    
});

module.exports = router;