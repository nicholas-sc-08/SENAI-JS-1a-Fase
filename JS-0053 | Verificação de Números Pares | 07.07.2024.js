// 6) Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”.

let resposta_usuario;
let contador = 1;
let soma = 0;
let media_dos_numeros_digitados;
const quantidade_maxima_de_perguntas = 5;
const numero_dois = 2;
const numero_zero = 0;
while(contador <= quantidade_maxima_de_perguntas){
    
    resposta_usuario = parseInt(prompt(`Digite qual é o ${contador}º número, deve ser par.`));

    if(resposta_usuario % numero_dois == numero_zero && resposta_usuario >= numero_zero){

        soma += resposta_usuario;
        contador++
    } else{
        alert(`Resposta inválida, favor digitar digitar um número par!`);
    };
    
};

    media_dos_numeros_digitados = soma / quantidade_maxima_de_perguntas;
    alert(`Média dos números digitados: ${media_dos_numeros_digitados}.`);
