// 1) Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido.

let respota_usuario;
let resultado;
let contador = 0;
const valor_maximo_da_tabuada = 10;
respota_usuario = 2;

respota_usuario = parseInt(prompt(`Digite o número que você deseja saber a tabuada:`));

while(contador < valor_maximo_da_tabuada){
    contador++
    resultado = respota_usuario * contador

    alert(`Tabuada do ${respota_usuario}:\n\n${respota_usuario} x ${contador} = ${resultado}`);
};
