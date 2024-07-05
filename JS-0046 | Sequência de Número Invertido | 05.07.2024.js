// 4) Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência". Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente". (PESQUISA: comando pare)

let contador = 10;
let resposta_correta = false;
let resposta_usuario;

while(resposta_correta == false){

    resposta_usuario = Number(prompt(`Digite sequancia de números invertida.`));
    
    if(resposta_usuario == contador){
        contador--
    } else{
        alert(`Você errou a sequência.`);
    }
    if(contador == 0){
    resposta_correta = true;
} 
};
    alert(`Você terminou a sequência corretamente!`);
