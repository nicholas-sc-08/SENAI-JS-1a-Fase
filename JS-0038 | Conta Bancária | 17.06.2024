// 2) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.

function conta_do_usuario(){

let escolha_do_usuario;
let valor_a_retirar;
let valor_a_atribuir;
let saldo_atual;
const saldo_inicial = 1000;
const saldo = 1;
const deposito = 2;
const saque = 3;



escolha_do_usuario = parseInt(prompt(`Escolha entre as opções:\n1) Saldo\n2) Depósito\n3) Saque`));

switch(true){

  case escolha_do_usuario == saque:

  valor_a_retirar = Number(prompt(`Escolha o valor a ser retirado.`));
  if(valor_a_retirar <= saldo_inicial){
  saldo_atual = saldo_inicial - valor_a_retirar;

  alert(`Saldo atual na conta: R$${Number(saldo_atual.toFixed(2))}.\nValor retirado: R$${Number(valor_a_retirar.toFixed(2))}.`);
  } else{
    alert(`Saldo insuficiente!`);
    conta_do_usuario();

  };
  break;
     
     case escolha_do_usuario == deposito:
     
     valor_a_atribuir = Number(prompt(`Qual o valor que deseja depositar em sua conta?`));
     saldo_atual = saldo_inicial + valor_a_atribuir;

     alert(`Saldo atual na conta: R$${Number(saldo_atual.toFixed(2))}.\nValor depositado na conta: R$${Number(valor_a_atribuir.toFixed(2))}.`);
     break;

     case escolha_do_usuario == saldo:
        alert(`Saldo atual na conta: R$${Number(saldo_inicial.toFixed(2))}.`);
     break;

     default:
        alert(`Opção inválida!\nDigite um vlaor entre (1 - 3)`);
        conta_do_usuario();
};
};
conta_do_usuario();
