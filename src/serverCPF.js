const express = require('express');
const app = express();
const router = require('./routers/cpf');

app.use(express.json());
app.use(router);

app.listen(3001, () => {
    console.log('Servidor CPF esta online!');
});