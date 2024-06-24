// 4) Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

let salario_do_usuario;
let anos_de_servico_do_usuario;
let salario_com_quantia_de_bonus;
const cem_porcento = 100;
const bonus_de_salario = 5;
const quantidade_de_anos_minima_de_servico = 5;

salario_do_usuario = Number(prompt(`Qual o seu salário mensal atual?`));
anos_de_servico_do_usuario = Number(prompt(`Quantos anos você esteve no seu serviço?`));

if(anos_de_servico_do_usuario > quantidade_de_anos_minima_de_servico){

   salario_com_quantia_de_bonus = salario_do_usuario * bonus_de_salario / cem_porcento;
   alert(`Salário a receber: ${salario_com_quantia_de_bonus}.`);

} else {

    alert(`Você não ganhou bônus de salário :#`);
}
