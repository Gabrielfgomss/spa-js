var botao = document.querySelector('#buscar-paciente');

botao.addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    var erroAjax = document.querySelector('#erro-ajax');

    xhr.addEventListener('load', function(){
        erroAjax.classList.add('invisivel');
        if(xhr.status==200){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
         
        pacientes.forEach(function(paciente){
            adicionaNaTabela(paciente);
        })
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove('invisivel');
        }
    });
    xhr.send();
})