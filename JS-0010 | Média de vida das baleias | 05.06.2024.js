// 10) As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em
// média 200 anos. A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez.
// Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes
// de uma baleia dessa espécie por década.

const media_de_vida_das_baleias = 200;
const tempo_a_cada_reproducao_em_anos = 4;
const uma_decada = 10;
let quantidade_de_decadas_na_vida_da_baleia;
let quantidade_de_reproducoes_na_vida_da_baleia;
let quantidade_de_filhotes_a_cada_decada;


quantidade_de_decadas_na_vida_da_baleia = media_de_vida_das_baleias / uma_decada;
quantidade_de_reproducoes_na_vida_da_baleia = media_de_vida_das_baleias / tempo_a_cada_reproducao_em_anos;
quantidade_de_filhotes_a_cada_decada = quantidade_de_reproducoes_na_vida_da_baleia / quantidade_de_decadas_na_vida_da_baleia;

console.log(quantidade_de_filhotes_a_cada_decada);
