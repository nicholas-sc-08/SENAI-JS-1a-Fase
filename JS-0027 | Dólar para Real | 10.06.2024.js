// 9) Elabore um programa que converta uma quantidade de dólares para reais. 
// Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a conversão para reais na tela. 
// Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.

let valor_em_dolares;
let valor_da_cotacao_do_dolar;
let valor_em_reais;
const valor_considerado_caro = 5;


valor_em_dolares = Number(prompt(`Qual a quantidades de dólares que deseja converter?`));
valor_da_cotacao_do_dolar = Number(prompt(`Qual a cotação do dolar hoje?`))
valor_em_reais = valor_em_dolares * valor_da_cotacao_do_dolar;

if(valor_da_cotacao_do_dolar > valor_considerado_caro){
    alert(`Valor considerado caro.\nValor convertido de dólares a reais: R$${valor_em_reais}`);
} else {
    alert(`Valor considerado barato.\nValor convertido de dólares a reais: R$${valor_em_reais}`);
};
