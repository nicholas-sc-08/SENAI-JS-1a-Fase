// 9) Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são
// necessários 10m³ (metros cúbicos) de gás, osend que o metro cúbico de gás custa R$15
// reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito
// somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um
// programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na
// tela o total cobrado pelo passeio.
function passeios_de_balao(){
const valor_de_gas_a_cada_metro_cubico_em_reais = 15;
const a_cada_cinco_minutos_de_voo = 10;
const a_cada_dez_metros_cubicos = 5;
const quantidade_maxima_de_pessoas_por_balao = 4;
const taxa_por_pessoa = 20;
let quantidade_de_pessoas_que_vao_para_o_passeio;
let quantidade_de_tempo_de_duracao_do_passeio;
let valor_do_gas;
let valor_do_gas_com_taxa;


quantidade_de_pessoas_que_vao_para_o_passeio = Number(prompt(`Quantas pessoas irão ao passeio? (Máx 4);`));

if(quantidade_de_pessoas_que_vao_para_o_passeio > quantidade_maxima_de_pessoas_por_balao){

   alert(`Quantidade de pessoas inválida!`);
   passeios_de_balao();
} else{
    
  quantidade_de_tempo_de_duracao_do_passeio = Number(prompt(`Quanto tempo de duração vai ter o passeio?`));


   valor_do_gas = (quantidade_de_tempo_de_duracao_do_passeio * a_cada_cinco_minutos_de_voo) / a_cada_dez_metros_cubicos;
   valor_do_gas_com_taxa = valor_do_gas + (quantidade_de_pessoas_que_vao_para_o_passeio * taxa_por_pessoa);

   alert(`O valor total do passeio vai ser de: R$${valor_do_gas_com_taxa}`);
}
};
passeios_de_balao();
