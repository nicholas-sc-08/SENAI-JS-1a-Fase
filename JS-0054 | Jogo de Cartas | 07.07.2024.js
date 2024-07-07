// 7) Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).

let nome_jogador_um;
let nome_jogadr_dois;
let jogada_jogador_um;
let jogada_jogador_dois;
let contador = 1;
let soma_dos_pontos_jogador_um = 0;
let soma_dos_pontos_jogador_dois = 0;
let jogada_valida_jogador_um = false;
let jogada_valida_jogador_dois = false;
const quantidade_de_rodadas = 5;
const valor_minimo_de_pontos_por_jogada = 1;
const valor_maximo_de_pontos_por_jogada = 13;

nome_jogador_um = prompt(`Digite o nome do Jogador 1:`);
nome_jogadr_dois = prompt(`Digite o nome do jogador 2:`);

while(contador <= quantidade_de_rodadas){ 

    jogada_jogador_um = parseInt(prompt(`Qual o valor da carta jogada pelo jogador ${nome_jogador_um} na ${contador}º rodada?`));
    if(jogada_jogador_um > valor_maximo_de_pontos_por_jogada || jogada_jogador_um < valor_minimo_de_pontos_por_jogada){
        alert(`Favor ${nome_jogador_um}, colocar um valor válido dentre 1 - 13!`);
    } else{
        jogada_valida_jogador_um = true;
    }
    jogada_jogador_dois = parseInt(prompt(`Qual o valor da carta jogada pelo jogador ${nome_jogadr_dois} na ${contador}º rodada?`));
     if(jogada_jogador_dois > valor_maximo_de_pontos_por_jogada || jogada_jogador_dois < valor_minimo_de_pontos_por_jogada){
        alert(`Favor ${nome_jogadr_dois}, colocar um valor válido dentre 1 - 13!`);
    } else{
        jogada_valida_jogador_dois = true;
    };

    if(jogada_valida_jogador_um == true && jogada_valida_jogador_dois == true){
        soma_dos_pontos_jogador_um += jogada_jogador_um;
        soma_dos_pontos_jogador_dois += jogada_jogador_dois;
        contador++;
        jogada_valida_jogador_um = false;
        jogada_valida_jogador_dois = false;
    };
};

    switch(true){

        case soma_dos_pontos_jogador_um > soma_dos_pontos_jogador_dois:
            alert(`${nome_jogador_um} ganha o jogo!`);
            break;
        case soma_dos_pontos_jogador_dois > soma_dos_pontos_jogador_um:
            alert(`${nome_jogadr_dois} ganha o jogo!`);
            break;
        default:
            alert(`O jogo empatou!`);
            break;
    };

