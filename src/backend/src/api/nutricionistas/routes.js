
const service = require('./service.js')
const { Router } = require('express')
const router = Router()

router.get('/', function (req, res) {
    service.buscarNutricionistas()
    res.sendStatus(204)
})

router.post('/', function (req, res) {
    const dadosNutricionista = req.body
    service.salvarNutricionistas(dadosNutricionista)

    let docRef = firebase.collection('nutricionistas').doc(dadosNutricionista.nome);
    docRef.set(dadosNutricionista);

    res.sendStatus(204)
})


module.exports = router