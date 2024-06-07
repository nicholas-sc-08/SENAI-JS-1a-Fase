// 13) Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a)
// comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3
// livros e mostra na tela o total dos livros sem desconto e com desconto.

let valor_total_dos_livros;
const quantos_porcento_de_desconto = 15;
const cem_porcento = 100;
let valor_do_livro_um;
let valor_do_livro_dois;
let valor_do_livro_tres;
let valor_dos_livros_com_desconto;
let valor_descontado;
valor_do_livro_um = Number(prompt(`Qual o valor do primeiro livro? `));
valor_do_livro_dois = Number(prompt(`Qual o valor do segundo livro?`));
valor_do_livro_tres = Number(prompt(`Qual o valor do terceiro livro?`));


valor_total_dos_livros = valor_do_livro_um + valor_do_livro_dois + valor_do_livro_tres;
valor_dos_livros_com_desconto = valor_total_dos_livros * quantos_porcento_de_desconto / cem_porcento;
valor_descontado = valor_total_dos_livros - valor_dos_livros_com_desconto;

alert(`Valor total sem desconto: R$${valor_total_dos_livros.toFixed(2)}.\nO total dos livros com desconto vai por: R$${valor_descontado.toFixed(2)}.`);

