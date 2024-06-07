// 1) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos.
// O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento.
// Digitar os valores (em metros) da largura e comprimento que deseja a piscina.
// Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.

const para_cada_metro_quadrado = 120;
const uma_caixa_de_azulejos = 60;
const valor_da_caixa_de_azulejos = 45.50;
let valor_em_metros_largura;
let valor_em_metros_comprimento;
let valor_em_metros_quadrado;
let valor_total_a_ser_pago;
let quantidade_necessaria_para_conversao_de_valores;
valor_em_metros_largura = Number(prompt(`Qual o valor da largura em metros?`));
valor_em_metros_comprimento = Number(prompt(`Qual o valor do comprimento? em metros`));

valor_em_metros_quadrado = valor_em_metros_largura * valor_em_metros_comprimento;
quantidade_necessaria_para_conversao_de_valores = para_cada_metro_quadrado / uma_caixa_de_azulejos;
valor_total_a_ser_pago = valor_da_caixa_de_azulejos * quantidade_necessaria_para_conversao_de_valores * valor_em_metros_quadrado;
alert(`Valor total: R$${valor_total_a_ser_pago}`);
