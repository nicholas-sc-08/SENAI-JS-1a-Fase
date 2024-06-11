// 12) Em um jogo de tabuleiro com combinação de moeda e dado, temos possibilidades de cara ou coroa (moeda) e números de 1 a 6 (dado). 
// Criar um programa que pergunte ao usuário qual foi o resultado da moeda e do dado, em seguida determinar o que acontece na rodada. 
// Caso o resultado da moeda tenha sido cara, o jogador perde a vez, independente do dado. Mostrar mensagem de "Você perdeu sua vez!". 
// Caso a moeda tenha sido coroa, o jogador pulará o número de casas no tabuleiro que sair na jogada do dado. 
// Mostrar mensagens "Avance X casas no tabuleiro!", sendo X o número que saiu no dado.

function jogo_de_tabuleiro(){

let lado_da_moeda;
let valor_do_dado;
let lado_da_moeda_um = `Cara`;
let lado_da_moeda_dois = `Coroa`;

lado_da_moeda = prompt(`Qual foi o lado da moeda que caiu no tabuleiro? (Cara ou Coroa)`);

if(lado_da_moeda == lado_da_moeda_um){
    alert(`Você perdeu sua vez!`);
} else if(lado_da_moeda == lado_da_moeda_dois){
    valor_do_dado = parseInt(prompt(`Qual o valor do dado que caiu?`));
    alert(`Avance ${valor_do_dado} casas no tabuleiro!`);
} else {
    alert(`É somente lado ou coroa!!`);
    jogo_de_tabuleiro();
};
};
jogo_de_tabuleiro();
