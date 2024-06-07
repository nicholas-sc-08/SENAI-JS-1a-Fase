// 5) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores.
// Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos
// nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 


let total_de_eleitores;
let votos_do_primeiro_candidato;
let votos_do_segundo_candidato;
let total_de_votos_brancos;
let total_de_votos_nulos;
let soma_total_dos_votos;
let soma_dos_votos_ao_primeiro_candidato_e_segundo_candidato;
const valor_inteiro = 100;
let porcentagem_dos_votos_do_primeiro_candidato;
let porcentagem_dos_votos_do_segundo_candidato;
let porcentagem_dos_votos_brancos;
let porcentagem_de_votos_nulos;

function perguntar_ao_usuario_sobre_o_total_de_eleitores(){
total_de_eleitores = Number(prompt(`Qual foi a quantidade total de votos?`));
votos_do_primeiro_candidato = Number(prompt(`Digite a quantidade de votos do primeiro candidato: `));
votos_do_segundo_candidato = Number(prompt(`Digite a quantidade de votos do segundo candidato: `));
total_de_votos_brancos = Number(prompt(`Quantos votos foram brancos? `));
total_de_votos_nulos = Number(prompt(`Quantos votos foram nulos?` ));


    soma_total_dos_votos = votos_do_primeiro_candidato + votos_do_segundo_candidato + total_de_votos_brancos + total_de_votos_nulos;
    

    if(total_de_eleitores != soma_total_dos_votos){
        alert(`A quantidade de votos não são semelhantes ao total de eleitores!`);
         perguntar_ao_usuario_sobre_o_total_de_eleitores();
    } else {

         porcentagem_dos_votos_do_primeiro_candidato = (votos_do_primeiro_candidato * valor_inteiro) / total_de_eleitores
         porcentagem_dos_votos_do_segundo_candidato = (votos_do_segundo_candidato * valor_inteiro) / total_de_eleitores
         porcentagem_dos_votos_brancos = (total_de_votos_brancos * valor_inteiro) / total_de_eleitores
         porcentagem_de_votos_nulos = (total_de_votos_nulos * valor_inteiro) / total_de_eleitores

         alert(`Quantidade total de Eleitores: ${total_de_eleitores}.\nQuantidade em porcentagem de quantos eleitores votaram no primeiro candidato: ${porcentagem_dos_votos_do_primeiro_candidato.toFixed(2)
        }%.\nQuantidade em porcentagem de quantos eleitores votaram no segundo candidato: ${porcentagem_dos_votos_do_segundo_candidato.toFixed(2)}%.\nQuantidade em porcentagem de quantas pessoas votaram: ${porcentagem_dos_votos_brancos.toFixed(2)}%\n
        Quantidade em porcentagem votos nulos: ${porcentagem_de_votos_nulos.toFixed(2)}%`);

    }
}
 perguntar_ao_usuario_sobre_o_total_de_eleitores();
