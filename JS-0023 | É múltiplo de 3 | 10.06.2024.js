// 5) Desenvolver um programa que receba um número inteiro e verifique se ele é múltiplo de 3. 
// Após digitar o número, mostrar uma das seguintes mensagens na tela “É múltiplo de 3!” ou “Não é múltiplo de 3”.

let numero_digitado_pelo_usuario;
let multiplo_de_tres;
const resto_da_divisao_zero = 0;
const divisivel_por_tres = 3;

numero_digitado_pelo_usuario = Number(prompt(`Qual o número que você deseja saber se é multiplo de três?`));

multiplo_de_tres = numero_digitado_pelo_usuario % divisivel_por_tres; 

if(multiplo_de_tres == resto_da_divisao_zero){

    alert(`É múltiplo de 3!`);
} else {
    alert(`Não é múltiplo de 3.`);
};
