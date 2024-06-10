// 8) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. 
// Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados). 
// Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

let densidade;
let area_de_quilometros_quadrada_digitada;
let densidade_demografica;
const densidade_considerada_baixa = 25;
const densidade_considerada_alta = 100;

densidade = Number(prompt(`Qual o total de habitantes na sua região?`));
area_de_quilometros_quadrada_digitada = Number(prompt(`Qual a área de quilometros quadrados da região?`));

densidade_demografica = densidade / area_de_quilometros_quadrada_digitada;

if(densidade_demografica < densidade_considerada_baixa) {
    alert(`Densdade considerada baixa..\n${densidade_demografica.toFixed(2)}`);
} else if(densidade_demografica >= densidade_considerada_alta){
    alert(`Densidade considerada alta..\n${densidade_demografica.toFixed(2)}`);
} else {
    alert(`Densidade considerada média..\n${densidade_demografica.toFixed(2)}`);
};
