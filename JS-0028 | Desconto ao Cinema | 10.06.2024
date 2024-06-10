// 10) Faça um programa que verifique a idade de uma pessoa e forneça um desconto no cinema. 
// Deve ser perguntado o valor do ingresso e a idade. Se ela tiver 12 anos ou menos, conceda um desconto de 50% no ingresso do cinema. 
// Se ela tiver de 13 a 17 anos, conceda um desconto de 25%. Caso contrário (18 anos ou mais), não conceda nenhum desconto. 
// Mostrar ao final o valor que a pessoa deve pagar.

let idade_digitada_pelo_usuario;
let valor_do_ingresso;
let valor_do_ingresso_com_desconto;
const cinquenta_porcento_de_desconto = 50;
const vinte_e_cinco_porcento_de_desconto =  25;
const doze_anos = 12;
const dezoito_anos = 18;
const cem_porcento = 100;
const valor_zero = 0;


idade_digitada_pelo_usuario = Number(`Qual a idade do usuário?`);
valor_do_ingresso = Number(prompt(`Qual o valor do ingresso?`));

if(idade_digitada_pelo_usuario <= doze_anos){
     valor_do_ingresso_com_desconto = valor_do_ingresso * cinquenta_porcento_de_desconto / cem_porcento; 
} else if(idade_digitada_pelo_usuario >= dezoito_anos){
    alert(`Sem desconto.\nValor do ingresso: R$${valor_do_ingresso}.`);
} else {
    valor_do_ingresso_com_desconto = valor_do_ingresso * vinte_e_cinco_porcento_de_desconto / cem_porcento;
    alert(`Desconto de 25%.\nValor do ingresso: R$${valor_do_ingresso_com_desconto}`);
};
