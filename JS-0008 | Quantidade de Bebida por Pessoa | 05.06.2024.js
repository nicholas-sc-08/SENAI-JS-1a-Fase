// 8) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp.
// Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou.
// Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos.
// Ao final, mostrar a média de litros bebidos por pessoa na festa.


let quantidade_de_pessoas_alema = 45;
let quantidade_de_litros_de_chopp_comprados_em_L = 300;
let quantidade_de_litros_desperdicado;
let quantidade_de_litros_que_sobraram;
let soma_para_saber_a_media_de_litros_por_pessoa;
let media_de_litros_por_alemao;

quantidade_de_litros_desperdicado = Number(prompt(`Qual foi a quantidade de litros desperdiçado?`));
quantidade_de_litros_que_sobraram = Number(prompt(`Qual foi a quantidade de litros que sobraram?`));

soma_para_saber_a_media_de_litros_por_pessoa = quantidade_de_litros_de_chopp_comprados_em_L - (quantidade_de_litros_que_sobraram + quantidade_de_litros_desperdicado);
media_de_litros_por_alemao = soma_para_saber_a_media_de_litros_por_pessoa / quantidade_de_pessoas_alema;

alert(`Quantidade de litros por pessoa é uma média: \n${media_de_litros_por_alemao.toFixed(2)}L\nQuantidade de litros desperdiçado: \n${quantidade_de_litros_desperdicado}L\nQuantidade de litros que sobraram:\n${quantidade_de_litros_que_sobraram}L `);
