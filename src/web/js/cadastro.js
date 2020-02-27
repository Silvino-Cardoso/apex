const $nome = document.getElementById('name')
const $sobrenome = document.getElementById('sobrenome')
const $email = document.getElementById('email')
const $senha = document.getElementById('senha')
const $repitaSenha = document.getElementById('repitaSenha')
const $cpf = document.getElementById('cpf')
const $ddd= document.getElementById('ddd')
const $telefone = document.getElementById('telefone')
const $rg = document.getElementById('rg')
const $dataNascimento = document.getElementById('dataNascimento')
const $cep = document.getElementById('cep')
const $rua = document.getElementById('rua')
const $complemento = document.getElementById('complemento')
const $bairro = document.getElementById('bairro')
const $cidade = document.getElementById('cidade')
const $estado = document.getElementById('estado')
const $registroProfissional = document.getElementById('registroProfissional')
const $facebook = document.getElementById('facebook')
const $instagram = document.getElementById('instagram')
const $linkedin = document.getElementById('linkedin')
const $twitter = document.getElementById('twitter')


function cadastrarNutricionista () {
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
){
    alert('você precisa preeencher todos os campor obrigatórios')
} else {
    axios.post('http://localhost:3000/nutricionistas', dadosEnvio)
    .then(response =>  console.log(response.data))
}

   
}