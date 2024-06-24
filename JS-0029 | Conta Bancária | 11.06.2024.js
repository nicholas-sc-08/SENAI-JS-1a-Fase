// 11) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. 
// Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. 
// Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.

function conta_bancaria(){

let opcoes_do_usuario;
let numero_da_conta_bancaria;
let saldo_de_conta_bancaria;
let saque_da_conta;
let deposito_de_conta;
const opcao_A = `Saldo`;
const opcao_B = `Depósito`;
const opcao_C = `Saque`;

numero_da_conta_bancaria = parseInt(prompt(`Qual o número da sua conta bancária?`));
saldo_de_conta_bancaria = parseFloat(prompt(`Qual o saldo atual da sua conta?`));
opcoes_do_usuario = prompt(`Qual das opções a seguir deseja realizar?\n1) Saldo\n2) Depósito\n3) Saque`);

if(opcoes_do_usuario == opcao_A){
    alert(`Saldo atual da conta: R$${saldo_de_conta_bancaria.toFixed(2)}`);
} else if(opcoes_do_usuario == opcao_B){
    deposito_de_conta = prompt(`Qual o valor que você deseja depositar na sua conta?`);
    saldo_de_conta_bancaria = saldo_de_conta_bancaria + deposito_de_conta;
    alert(`Saldo total da conta: R$${saldo_de_conta_bancaria.toFixed(2)}`);
} else if(opcoes_do_usuario == opcao_C){
     saque_da_conta = Number(prompt(`Qual o valor que você deseja retirar da conta?`));
     if(saque_da_conta > saldo_de_conta_bancaria){
        alert(`Valor inválido.`);
        conta_bancaria();
     } else{
        saldo_de_conta_bancaria = saldo_de_conta_bancaria - saque_da_conta;
        alert(`Valor retirado..\nR$${saque_da_conta.toFixed(2)}.\nSaldo atual: R$${saldo_de_conta_bancaria.toFixed(2)}.`);
     };
} else{
    alert(`Opção inválida.`)
    conta_bancaria();
};
};

conta_bancaria();
