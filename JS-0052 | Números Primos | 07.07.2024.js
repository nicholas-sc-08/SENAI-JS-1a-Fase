// 5) Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça ao usuário para digitar cinco números inteiros e mostre na tela se são primos ou não.

let resposta_usuario;
let contador = 1;
let resultado;
const vezes_a_repetir_a_pergunta = 5;
const resto_para_ser_numero_primo = 1;

while(contador <= vezes_a_repetir_a_pergunta){
    
    resposta_usuario = parseInt(prompt(`Digite o ${contador}º número para saber se ele é primo ou não:`));
    resultado = resposta_usuario;

    if(resultado % 2 == 0 || resultado <= 1){
        alert(`Não é um número primo!\nNúmero digitado: ${resultado}.`)
    }else{
        alert(`É um número primo!\nNúmero digitado: ${resultado}.`);
    };
    contador++;
};
