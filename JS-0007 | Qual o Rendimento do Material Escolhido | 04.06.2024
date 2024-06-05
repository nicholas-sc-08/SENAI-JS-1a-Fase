// 7) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00.
// Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 
function verificacaoDeMaterial(){
let a_cada_dez_kilos_de_plastico_remdem = 2;
let quantidade_minima_de_plastico_necessaria = 10;
let a_cada_trinta_kilos_de_papel_rendem = 3;
let quantidade_minima_de_papel_necessaria = 30;
let a_cada_cinquenta_kilos_de_metal_rendem = 5;
let quantidade_minima_de_metal_necessaria = 50;
let quantidade_de_metal_coletado;
let quantidade_de_papel_coletado;
let quantidade_de_plastico_coletado;
let valor_total_de_rendimento_de_metal;
let valor_total_de_rendimento_de_plastico;
let valor_total_de_rendimento_de_papel;
let valor_de_lucro;


quantidade_de_metal_coletado = prompt(`Quantos kilos de metal deseja entregar?`);
quantidade_de_papel_coletado = prompt(`Quantos kilos de papel deseja entregar?`);
quantidade_de_plastico_coletado = prompt(`Quantos kilos de plástico deseja entregar?`)
    valor_total_de_rendimento_de_metal = (quantidade_de_metal_coletado * a_cada_cinquenta_kilos_de_metal_rendem) / quantidade_minima_de_metal_necessaria;
    valor_total_de_rendimento_de_papel = (quantidade_de_papel_coletado * a_cada_trinta_kilos_de_papel_rendem) / quantidade_minima_de_papel_necessaria;
    valor_total_de_rendimento_de_plastico = (quantidade_de_plastico_coletado * a_cada_dez_kilos_de_plastico_remdem) / quantidade_minima_de_plastico_necessaria;
    valor_de_lucro = valor_total_de_rendimento_de_metal + valor_total_de_rendimento_de_papel + valor_total_de_rendimento_de_plastico
    alert(`O valor de rendimento que você obteve foi de: R$${valor_de_lucro}.`);
}
verificacaoDeMaterial();
