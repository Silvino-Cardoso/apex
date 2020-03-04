
function cadastrarNutricionista() {
    console.log('teste')
    const dadosEnvio = {
        nome: $nome.value,
        sobrenome: $sobrenome.value,
        email: $email.value,
        senha: $senha.value,
        repitaSenha: $repitaSenha.value,
        cpf: $cpf.value,
        ddd: $ddd.value,
        telefone: $telefone.value,
        rg: $rg.value,
        dataNascimento: $dataNascimento.value,
        cep: $cep.value,
        rua: $rua.value,
        complemento: $complemento.value,
        bairro: $bairro.value,
        cidade: $cidade.value,
        estado: $estado.value,
        registroProfissional: $registroProfissional.value,
        facebook: $facebook.value,
        instagram: $instagram.value,
        linkedin: $linkedin.value,
        twitter: $twitter.value,
    }

    const configuracaorequest = {
        method: 'Post',
        body: JSON.stringify(dadosEnvio),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    if (
        !dadosEnvio.nome ||
        !dadosEnvio.sobrenome ||
        !dadosEnvio.email ||
        !dadosEnvio.senha ||
        !dadosEnvio.repitaSenha ||
        !dadosEnvio.cpf ||
        !dadosEnvio.ddd ||
        !dadosEnvio.telefone ||
        !dadosEnvio.rg ||
        !dadosEnvio.dataNascimento ||
        !dadosEnvio.cep ||
        !dadosEnvio.rua ||
        !dadosEnvio.complemento ||
        !dadosEnvio.bairro ||
        !dadosEnvio.cidade ||
        !dadosEnvio.estado ||
        !dadosEnvio.registroProfissional
    ) {
        $('#preenchaTodosOsCampos').modal({
            backdrop: 'static',
            show: true
        })
        return
    }
    if (dadosEnvio.senha != dadosEnvio.repitaSenha) {
        $(senhasNaoConferem).modal({
            backdrop: 'static',
            show: true
        })
    }

    else {
        axios.post('http://localhost:3000/nutricionistas', dadosEnvio)
            .then(() => {
                $('#SalvoComSucesso').modal('show')
            })
            .catch(() => {
                $('#erroAoSalvar').modal({
                    backdrop: 'static',
                    show: true
                })
            })
    }
}

function buscarEstados() {
    axios
        .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(({ data }) => {
           
            const options = data.map(function (item) {
                return `<option value ="${item.sigla}" data-id="${item.id}" >${item.nome}</option>`
            })
        
            $estado.insertAdjacentHTML("beforeend",options)
        })
    
}

function buscarCidades(){
    const indiceEstadoSelecionado = $estado.selectedIndex 

    const stateId = $estado.options[indiceEstadoSelecionado].getAttribute('data-id')

    return axios
    .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`)
    .then(({data}) => {
        const optionsCidade = data.map(function (data){
            return `<option value ="${data.id}">${data.nome}</option>`
        })

        $cidade.options.length = 0
        $cidade.insertAdjacentHTML('beforeend', optionsCidade)
    })

}

buscarEstados()



