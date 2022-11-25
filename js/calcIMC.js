// Variaveis
var nomeSelect = document.querySelectorAll('.info-nome');
/*var nomeI = nomeSelect[0].textContent;
var arrayNome = nomeI.split('');
console.log(arrayNome);*/
var pesosSelect = document.querySelectorAll('.info-peso');

var alturaSelect = document.querySelectorAll('.info-altura');

var imcSelect = document.querySelectorAll('.info-imc');


for (var i = 0; i < pesosSelect.length; i++) {

    var peso = pesosSelect[i].textContent;
    var altura = alturaSelect[i].textContent;

    var pesoValido = validaPeso(peso); 
    var alturaValida = validaAltura(altura);
    //var nomeValido = validaNome(nome);

    if (!pesoValido) {
        imcSelect[i].textContent = 'Peso inválido';
    }   
    if (!alturaValida) {
        imcSelect[i].textContent = 'Altura inválida';
    }
    if (pesoValido && alturaValida) {
        imcSelect[i].textContent = calcIMC(peso, altura);
    }
    /*if (!nomeValido) {
        imcSelect[i].textContent = 'Nome inválido';
    }*/
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }

}
function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false
    }
}
/*function validaNome(nome) {
    if (nome.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validaGordura(gordura) {
    if (gordura.length > 0) {
        return true;
    } else {
        return false;
    }
}*/

function calcIMC(peso, altura) {
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

