// 2) Crie um programa que solicite a senha de um usuário e depois, peça pra digitar novamente até que as duas senhas sejam correspondentes.

let senha_usuario;
let verificacao_de_senha;
let nome_de_usuario;
let senha_correta = false;
nome_de_usuario = prompt(`Digite seu nome de usuário:`);
senha_usuario = prompt(`Digite sua senha:`);

while(senha_correta == false){

    verificacao_de_senha = prompt(`Digite sua senha novamente:`);
    if(senha_usuario != verificacao_de_senha){
        alert(`A senha não está correta!`);
    } else{
        alert(`Seja bem-vindo ${nome_de_usuario}!`);
        senha_correta = true;
    };
};
