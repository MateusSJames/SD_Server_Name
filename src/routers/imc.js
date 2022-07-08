const express = require('express');
const router = express.Router();

router.post('/imc', (req, res) => {
    const {peso, altura} = req.body;
    if(peso && altura) {
        var imc = peso/(altura*altura);
        var status = '';
        if(imc < 18.5) {
            status = 'Baixo peso';
        } else if (imc >= 18.5 && imc < 25) {
            status = 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            status = 'Excesso de peso';
        } else if (imc >= 30 && imc < 35) {
            status = 'Obesidade grau I';
        } else if (imc >= 35 && imc < 40) {
            status = 'Obesidade grau II';
        } else {
            status = 'Obesidade grau III';
        }
        return res.status(200).json({'IMC': imc.toFixed(2), 'Status': status});
    }
    return res.status(400).json({'Erro': 'Alguns campos não foram informados'});
});

module.exports = router;