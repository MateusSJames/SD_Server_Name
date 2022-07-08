const express = require('express');
const app = express();
const router = require('./routers/imc');

app.use(express.json());
app.use(router);

app.listen(3002, () => {
    console.log('Servidor IMC esta online!');
})