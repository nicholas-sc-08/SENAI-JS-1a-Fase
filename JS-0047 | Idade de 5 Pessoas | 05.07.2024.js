// 5) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)

let nome_pessoa;
let idade_pessoa;
let contador = 0;
let soma = 0;
let media_das_idades;
let maior_idade = 0;
let pessoa_com_maior_idade;
let limite_de_vezes_para_repetir = 5;

while(contador < limite_de_vezes_para_repetir){

    nome_pessoa = prompt(`Qual o nome da pessoa:`);
    idade_pessoa = Number(prompt(`Qual a idade da pessoa`));
    soma = soma + idade_pessoa;
    contador++

    if(idade_pessoa >= maior_idade){
        maior_idade = idade_pessoa;
        pessoa_com_maior_idade = nome_pessoa; 
    };
};


    media_das_idades = soma / limite_de_vezes_para_repetir;
    alert(`Nome da pessoa: ${pessoa_com_maior_idade}\nMédia: ${media_das_idades}\nMaior idade: ${maior_idade}`);

