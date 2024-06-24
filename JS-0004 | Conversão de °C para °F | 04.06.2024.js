// 4) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. 


var graus_em_celcius;
var conversao_de_celcius_para_fahrenheit;
var valor_do_zero_em_fahrenheit = 32;
var valor_de_um_celcius_em_fahrenheit = 1.8;

graus_em_celcius = prompt(`Digite a temperatura de graus celcius que você quer que seja convertido: `);
conversao_de_celcius_para_fahrenheit = valor_de_um_celcius_em_fahrenheit * graus_em_celcius + valor_do_zero_em_fahrenheit;

alert(`Valor de celcius que foi digitado ${graus_em_celcius} °C, valor convertido em fahrenheit: ${conversao_de_celcius_para_fahrenheit} °F.`);
