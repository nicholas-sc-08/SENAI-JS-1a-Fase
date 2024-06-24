// 3) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). Mostrar na tela o valor da compra de acordo com a opção escolhida.


function calculo_do_valor_do_frete(){

const valor_do_frete = 12.50;
const assinante_premium = 1;
const assinante_gold = 2;
const assinante_silver = 3;
const nao_assinante = 4;
const vinte = 20;
const dez = 10;
const cem = 100;
let valor_da_compra;
let valor_total_da_compra;
let valor_com_desconto;
let escolha_de_categoria;

escolha_de_categoria = parseInt(prompt(`Escolha entre 1 das 4 opções?\n1) Assinante Premium\n2) Assisnante Gold\n3)Assinante Silver\n4) Não assinante`));
valor_da_compra = Number(prompt(`Qual o valor da compra?`));

switch(true){
    case escolha_de_categoria == assinante_premium:

    valor_com_desconto = valor_da_compra * vinte / cem;
    valor_total_da_compra = valor_da_compra - valor_com_desconto;
    alert(`Valor total da compra: R$${Number(valor_total_da_compra.toFixed(2))}.\nValor descontado: R$${Number(valor_com_desconto.toFixed(2))}.`);
    break;

    case escolha_de_categoria == assinante_gold:

    valor_com_desconto = valor_da_compra * vinte / cem;
    valor_total_da_compra = valor_com_desconto + valor_do_frete;
    alert(`Valor total da compra: R$${Number(valor_total_da_compra.toFixed(2))}.\nValor descontado: R$${Number(valor_com_desconto.toFixed(2))}`);
    break;

    case escolha_de_categoria == assinante_silver:
    valor_com_desconto = valor_da_compra * dez / cem;
    valor_total_da_compra = valor_com_desconto + valor_do_frete;
    alert(`Valor total da compra: R$${Number(valor_da_compra.toFixed(2))}.\nValor descontado: R$${Number(valor_com_desconto.toFixed(2))}.`);
    break;

    case escolha_de_categoria == nao_assinante:

     valor_total_da_compra = valor_da_compra + valor_do_frete;
     alert(`Valor total da compra: R$${Number(valor_total_da_compra.toFixed(2))}`);

     default:
        alert(`Opção inválida!\nEscolha entre (1 - 4).`);
         calculo_do_valor_do_frete();
};
};
calculo_do_valor_do_frete();
