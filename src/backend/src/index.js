const cors = require('cors')
const express = require('express');
const app = express();

// 2 linhas abaixo dizem para a aplicação entender JSON.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors('*'))


app.get('/pacientes', function (req, res) {
  res.json([
    {id:1, name: "Fulano", datacadastro: '2020-02-02'},
    {id:2, name: "Fulano1", datacadastro: '2020-02-02'},
    {id:3, name: "Fulano2", datacadastro: '2020-02-02'},
    {id:4, name: "Fulano3", datacadastro: '2020-02-02'},
    {id:5, name: "Fulano4", datacadastro: '2020-02-02'},
    {id:6, name: "Fulano5", datacadastro: '2020-02-02'},
    {id:7, name: "Fulano5", datacadastro: '2020-02-02'},
    {id:8, name: "Fulano5", datacadastro: '2020-02-02'},
    {id:9, name: "Fulano5", datacadastro: '2020-02-02'},
    {id:10, name: "Fulano5", datacadastro: '2020-02-02'},
    {id:11, name: "Fulano5", datacadastro: '2020-02-02'},


  ])
});

app.post('/nutricionistas', function (req, res){
    console.log(req.body)
    res.json(req.body)
  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});