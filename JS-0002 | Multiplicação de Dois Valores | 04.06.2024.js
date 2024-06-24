// 2) Faça um programa no qual o usuário digite dois números e mostre na tela a multiplicação desses números. 


var numero_A;
var numero_B;
var calculo_de_multiplicao;


alert(`Seja bem-vindo(a), você está para fazer multiplicação.`);
numero_A = Number(prompt(`Digite o primeiro valor.`));
numero_B = Number(prompt(`Digite o segundo valor.`));

calculo_de_multiplicao = numero_A * numero_B;

alert(`Resultado de sua operação de multiplicação: ${calculo_de_multiplicao}`);
