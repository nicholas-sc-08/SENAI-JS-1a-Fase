// 6) Criar um programa que recebe o peso (kg) de um objeto no planeta Terra. Em seguida, apresentar a lista abaixo e pedir ao usuário para digitar o número desejado para escolher outros lugares do sistema solar. Ao final mostrar, o peso desse objeto 
//no lugar selecionado. Lista de locais (lua e planetas) e gravidades relativas à Terra:

// 1 - 0,06 Plutão
// 2 - 0,17 Lua
// 3 - 0,38 Mercúrio
// 4 - 0,38 Marte
// 5 - 0,91 Vênus
// 6 - 0,92 Urano
// 7 - 1,06 Saturno
// 8 - 1,19 Netuno
// 9 - 2,34 Júpiter

const peso_plutao = 0.06;
const peso_lua = 0.17;
const peso_mercurio = 0.38;
const peso_marte = 0.38;
const peso_venus = 0.91;
const peso_urano = 0.92;
const peso_saturno = 1.06;
const peso_netuno = 1.19;
const peso_juptier = 2.34;
const escolha_um_plutao = 1;
const escolha_dois_lua = 2;
const escolha_tres_mercurio = 3;
const escolha_quatro_marte = 4;
const escolha_cinco_venus = 5;
const escolha_seis_urano = 6;
const escolha_sete_saturno = 7;
const escolha_oito_netuno = 8;
const escolha_nove_jupiter = 9;
let peso_em_kg_digitado;
let peso_do_objeto_no_planeta;
let peso_do_objeto;


peso_em_kg_digitado = parseInt(prompt(`Digite o número de (1 - 9) em qual planeta ou lua deseja saber o peso do seu objeto neste lugar, sendo:
\n
1) Plutão
2) Lua
3) Mercúrio
4) Marte
5) Vênus
6) Urano
7) Saturno
8) Netuno
9) Júpter

`));


peso_do_objeto = Number(prompt(`Digite o peso do objeto:`));

switch(true){

  case peso_em_kg_digitado == `1`:
  peso_do_objeto_no_planeta = peso_plutao * peso_do_objeto;
  alert(`Peso do objeto no planeta: ${Number(peso_do_objeto_no_planeta.toFixed(2))}`);
  break;
  
  case peso_em_kg_digitado == `2`:
    peso_do_objeto_no_planeta = peso_lua * peso_do_objeto;
  alert(`Peso do objeto no planeta: ${Number(peso_do_objeto_no_planeta.toFixed(2))}`);
  break;

  case peso_em_kg_digitado == `3`:
  peso_do_objeto_no_planeta = peso_mercurio * peso_do_objeto;
  alert(`Peso do objeto no planeta: ${Number(peso_do_objeto_no_planeta.toFixed(2))}`);
  break;

  case peso_em_kg_digitado == `4`:
    peso_do_objeto_no_planeta = peso_marte * peso_do_objeto;
    alert(`Peso do objeto no planeta: ${Number(peso_do_objeto_no_planeta.toFixed(2))}`);
  break;

  case peso_em_kg_digitado == `5`:
      peso_do_objeto_no_planeta = peso_venus * peso_do_objeto;
      alert(`Peso do objeto no planeta: ${Number(peso_do_objeto_no_planeta.toFixed(2))}`);
  break;

  case peso_em_kg_digitado == `6`:
        peso_do_objeto_no_planeta = peso_urano * peso_do_objeto;
        alert(`Peso do objeto no planeta: ${Number(peso_do_objeto_no_planeta.toFixed(2))}`);
  break;

  case peso_em_kg_digitado == `7`:
          peso_do_objeto_no_planeta = peso_saturno * peso_do_objeto;
          alert(`Peso do objeto no planeta: ${Number(peso_do_objeto_no_planeta.toFixed(2))}`);
  break;

  case peso_em_kg_digitado == `8`:
            peso_do_objeto_no_planeta = peso_netuno * peso_do_objeto;
            alert(`Peso do objeto no planeta: ${Number(peso_do_objeto_no_planeta.toFixed(2))}`);
  break;

  case peso_em_kg_digitado == `9`:
              peso_do_objeto_no_planeta = peso_juptier * peso_do_objeto;
              alert(`Peso do objeto no planeta: ${Number(peso_do_objeto_no_planeta.toFixed(2))}`);
  break;

  default:
    alert(`Número inválido!`);
};
