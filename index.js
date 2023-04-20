// Fazendo a requisição da dependencia Express
const express = require('express');
const path = require('path');

const app = express();

app.engine('html', require('ejs').renderFile); // Setando que vou utilizar o EJS para renderizar nossos arquivos html
app.set('view engine', 'html');

// Setando que tudo que é estático, ficará na pasta public
// express.static(path.join(__dirname, 'public')): pega o diretorio atual e acessa a pasta public
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views')); // Setando a pasta onde ficará minhas views. (mesmo role para pegar o dir completo)

var tarefas = ['Arrumar o Quarto', 'Comprar no Supermercado'];

// Criando a rota "/" e definindo uma função de callback, onde ela recebe dois parametros:
// req = requisição
// res = resposta da rota
app.get('/', (req, res)=>{
    res.render('index', {arr_tarefas: tarefas});
})

// req.params.id: Explicando
// req : objeto da nossa requisição
// params : o que está vindo de parametro na nossa url
// id : referente ao nosso parametro (:id)
app.get('/delete/:id', (req, res)=>{
    // Pego o array tarefas e faço um "clone" dela mas com uma verificação.
    tarefas = tarefas.filter((val, index)=>{
        if(index != req.params.id) return val;
    })
    res.render('index', {arr_tarefas: tarefas});
})

// Definimos que nosso servidor irá rodar na porta 5000.
// O Express é uma dependencia que se baseia em rotas (tipo o parse_url do php);
app.listen(5000, ()=>{
    console.log('start serve in port 5000!')
})