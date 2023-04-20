// Fazendo a requisição da dependencia Express
const express = require('express');

const app = express();

// Criando a rota "/" e definindo uma função de callback, onde ela recebe dois parametros:
// req = requisição
// rep = resposta da rota
app.get('/', (req, rep)=>{
    rep.send('page loaded');
})

// Definimos que nosso servidor irá rodar na porta 5000.
// O Express é uma dependencia que se baseia em rotas (tipo o parse_url do php);
app.listen(5000, ()=>{
    console.log('start serve in port 5000!')
})