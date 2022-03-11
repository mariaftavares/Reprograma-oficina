let inputGanhoMes = document.querySelector("#ganho-mes");
let inputHoraDias = document.querySelector("#horas-dia");
let spanResposta = document.querySelector("#resposta");

function calcularValorHora(){
   let totalHoras = inputHoraDias.valueAsNumber * 22;
   let valorFinal = inputGanhoMes.valueAsNumber/totalHoras;
   spanResposta.textContent = "R$"+valorFinal.toFixed(2);
}