// 8) Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas. (DESAFIO: Gerar um número aleatório utilizando Math.random e Math.floor)

let resposta_usuario;
let numero_adivinhado = false;
let contador = 0;
let adivinhação_do_numero;
let numero_sortido;
let resultado;
const numero_limite = 100;
const numero_minimo = 1;
resposta_usuario = parseInt(prompt(`Digite um número de 1-100:`));

while(numero_adivinhado == false){
   
    adivinhação_do_numero = parseInt(prompt(`Digite o número que você acha que é o número secreto:`));
    if(adivinhação_do_numero > numero_limite || adivinhação_do_numero < numero_minimo){
        alert(`Favor digitar um número de 1 a 100!`);
    } else{
        numero_sortido = Math.floor(Math.random() * resposta_usuario);
        contador++

        if(adivinhação_do_numero == numero_sortido){
            alert(`Parabéns!\n Total de rodadas ocorridos: ${contador}`);
            numero_adivinhado = true;
        } else if(adivinhação_do_numero > numero_sortido){
            alert(`Número digitado é menor.`);
        } else {
            alert(`Número digitado é maior`);
        };

    };
};
