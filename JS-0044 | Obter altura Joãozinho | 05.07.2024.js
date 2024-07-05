// 2) Joãozinho mede 1,75m de altura e cresce 1cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3cm por ano. Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.

let altura_joaozinho = 1.75;
let altura_pedrinho = 1.60;
const altura__que_joao_cresce_por_ano = 0.01;
const altura__que_pedrinho_cresce_por_ano = 0.03;
let ano = 0;

while(altura_pedrinho < altura_joaozinho){

    altura_joaozinho = altura_joaozinho + altura__que_joao_cresce_por_ano;
    altura_pedrinho = altura_pedrinho + altura__que_pedrinho_cresce_por_ano;
    ano++
};

alert(ano);

