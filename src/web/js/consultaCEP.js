function consultarCEP (){
    axios.get(`http://viacep.com.br/ws/${$cep.value}/json/`)
    .then(({ data }) => {
             
        $estado.value = data.uf
        $rua.value = data.logradouro
        $bairro.value = data.bairro
      
      buscarCidades().then(function(){
        $cidade.value = data.ibge
        $cidade.disabled = true
        $estado.disabled = true
        $rua.disabled = true
        $bairro.disabled = true
      })
    })
    .catch(function(){
        $(`#cepNaoEncontrado`).modal({
            backdrop: 'static',
            show: true
        })
    })
}


