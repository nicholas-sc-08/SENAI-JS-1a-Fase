// 4) Em uma competição de dardos, os competidores se classificam para a próxima fase caso consigam 75% ou mais da pontuação total, que é 60 pontos. Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem. Menos que isso, é eliminado. Cada arremesso pode marcar de 0 a 10 pontos, dependendo da precisão. Criar um programa para armazenar a pontuação dos 6 arremessos de um competidor e ao final mostrar uma mensagem com sua pontuação, seu desempenho (percentual) e se ele está classificado, se foi para a repescagem ou se está desclassificado.

let resposta_usuario;
let contador = 1;
let soma = 0;
let valor_em_porcentagem_de_acertos_do_usuario;
let valor_em_porcentagem_de_pontos_cinquenta_porcento;
let valor_em_porcentagem_de_pontos_setenta_e_cinco_porcento;
const quantidade_minima_de_pontos_por_rodada = 0;
const quantidade_maxima_de_pontos_por_rodada = 10; 
const setenta_e_cinco = 75;
const cinquenta = 50;
const quantidade_de_pontos_maxima = 60;
const quantia_de_lances = 6;
const cem_porcento = 100;


while(contador <= quantia_de_lances){
    
    resposta_usuario = parseInt(prompt(`Qual foi a quantidade de lances na ${contador}º rodada? (1 - 10):`));

    if(resposta_usuario < quantidade_minima_de_pontos_por_rodada || resposta_usuario > quantidade_maxima_de_pontos_por_rodada){
        alert(`Favor digitar entre 1 - 10 pontos!`);
    } else {
        soma += resposta_usuario;
        contador++
    };
};

valor_em_porcentagem_de_pontos_setenta_e_cinco_porcento = (quantidade_de_pontos_maxima * setenta_e_cinco) / cem_porcento;
valor_em_porcentagem_de_acertos_do_usuario = (quantidade_de_pontos_maxima / soma) * cem_porcento;
valor_em_porcentagem_de_pontos_cinquenta_porcento = (quantidade_de_pontos_maxima * cinquenta) / cem_porcento;

    if(valor_em_porcentagem_de_acertos_do_usuario >= valor_em_porcentagem_de_pontos_setenta_e_cinco_porcento){
        alert(`Parabéns avançou para a próxima etapa!\nQuantidade de pontos: ${soma}.`);
    } else if(valor_em_porcentagem_de_acertos_do_usuario < valor_em_porcentagem_de_pontos_cinquenta_porcento){
        alert(`Jogador foi desqualificado.\nQuantidade de pontos: ${soma}.`);
    } else {
        alert(`Jogador foi para a repescagem.\nQuantidade de pontos: ${soma}.`);
    };
