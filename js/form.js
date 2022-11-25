// Botão clicavel
var botaoAdicionar = document.querySelector('#adicionar-paciente');

function dadosDoPaciente (form) {
    var dados = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcIMC(form.peso.value, form.altura.value),
    }
    return dados
}

function criarPaciente(dados) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(adicionaDados(dados.nome, 'info-nome'));
    pacienteTr.appendChild(adicionaDados(dados.peso, 'info-peso'));
    pacienteTr.appendChild(adicionaDados(dados.altura, 'info-altura'));
    pacienteTr.appendChild(adicionaDados(dados.gordura, 'info-gordura'));
    pacienteTr.appendChild(adicionaDados(dados.imc, 'info-imc'));

    return pacienteTr;
}

function adicionaDados(valor, classe) {
    var dadosTd = document.createElement('td');
    dadosTd.textContent = valor;
    dadosTd.classList.add(classe);

    return dadosTd;
}


function validaPaciente(dados) {
    var erros = [];
    
    if (!validaPeso(dados.peso)) {
        erros.push("Peso é inválido!");
    } 
    if (!validaAltura(dados.altura)){
        erros.push("Altura é inválida");
    }
    if (dados.nome.length == 0){
        erros.push("Nome em branco");
    }
    if (dados.gordura.length == 0){
        erros.push("Gordura em branco");
    }
    return erros;   
}

function listaErros(erros) {
    var msnErro = document.querySelector('#mensagem-erro');
    msnErro.innerHTML = "";

    erros.forEach(function(erro) {
    var lista = document.createElement('li');
    lista.textContent = erro;
    msnErro.appendChild(lista);
    })
}

function adicionaNaTabela(paciente) {
    var pacienteTr = criarPaciente(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function adicionarPaciente(event) {
    event.preventDefault();
    var form = document.querySelector('#form-adiciona');

    var dados = dadosDoPaciente(form);

    var erros = validaPaciente(dados);
    erros.innerHTML = "";

    if(erros.length > 0) {
        listaErros(erros);
        return;
    }
    
    adicionaNaTabela(dados);

    form.reset();

    //var msnErro = document.querySelector('#mensagem-erro');
    //msnErro.innerHTML = "";
}

botaoAdicionar.addEventListener('click', adicionarPaciente);