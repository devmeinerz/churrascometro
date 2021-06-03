let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qdtTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let qdtTotalCerveja= cervejaPorPessoa(duracao) * adultos;
    let qdtTotalBebidas= bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);


//Apresentação do resultado
    if(criancas =='' || adultos == '' || duracao == ""){
        alert("Preencha os campos abaixo");
    }else{
    resultado.innerHTML = `</br>`
    resultado.innerHTML += `<p><strong>Recomendação:</strong></p>`
    resultado.innerHTML += `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`    
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 473)} latas de Cerveja (473ml)</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} garrafas de Bebida (2L)</p>`
    }
}

//Cálculos das quantidades

function carnePorPessoa(duracao){
    if (duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPorPessoa(duracao){
    if (duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}

//Função do botão limpar

function limpar(){
    resultado.innerHTML = inputDuracao.value = '';
    resultado.innerHTML = inputCriancas.value = '';
    resultado.innerHTML = inputAdultos.value = '';
}