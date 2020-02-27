const cors = require('cors')
const express = require('express');
const app = express();

// rotas disponíveis
const rotasPacientes = require('./api/pacientes/routes')
const rotasNutricionistas = require('./api/nutricionistas/routes')

// 2 linhas abaixo dizem para a aplicação entender JSON.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors('*'))


app.use('/pacientes', rotasPacientes);

app.use('/nutricionistas' , rotasNutricionistas);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});