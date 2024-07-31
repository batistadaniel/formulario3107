function mostrarInputOutros() {
    var inputOutrosDiv = document.querySelector('.input-outros');
    var inputOutros = inputOutrosDiv.querySelector('input[type="text"]');
    var radioOutros = document.getElementById('outros');
    inputOutrosDiv.style.display = 'inline-block';
    radioOutros.checked = true;
    inputOutros.focus();
}

function esconderInputOutros() {
    var inputOutrosDiv = document.querySelector('.input-outros');
    var inputOutros = inputOutrosDiv.querySelector('input[type="text"]');
    inputOutrosDiv.style.display = 'none';
    inputOutros.value = ''; 
}

let iconeMsg = document.getElementById('iconeMsg');
let msgAlerta = document.getElementById('msgAlerta');

const mensagens = [
    {
        msg: 'Informar o número do CPF corretamente (preenchimento obrigatório). Esse item não será obrigatório para algumas exceções, que são: estrangeirospessoa em situação de rua no momento; pessoa privada de liberdade no momento; indígena.'
    },
    {
        msg: 'TESTE 2'
    },
    {
        msg: 'TESTE 3'
    }
];

function mostrarAlerta(numeroMensagem) {
    msgAlerta.innerHTML = `${mensagens[numeroMensagem].msg}`;
    msgAlerta.style.display = 'block';
    setInterval(() => {
        msgAlerta.innerHTML = `${mensagens[numeroMensagem].msg}`;
        msgAlerta.style.display = 'none';
    }, 10000)
}



