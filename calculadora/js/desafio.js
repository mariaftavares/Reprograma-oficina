let inputValorHora = document.querySelector("#valor-hora");
let inputHorasProjeto = document.querySelector("#horas-projeto");
let spanResposta = document.querySelector("#resposta");

function calcular() {
    valorResultado = inputHorasProjeto.valueAsNumber * inputValorHora.valueAsNumber;
    if (valorResultado <= 0) {
        spanResposta.textContent = "R$0,00"
    }
    else if(isNaN(valorResultado)){
        spanResposta.textContent = "R$0,00"
    }
    else {
        spanResposta.textContent = "R$" + valorResultado.toFixed(2);
    }
}