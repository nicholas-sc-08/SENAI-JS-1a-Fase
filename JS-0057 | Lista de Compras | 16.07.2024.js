/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = [];
let contem;
let item_um;
let item_dois;
let item_tres;

item_um = prompt(`Adicione o item um a lista:`);
item_dois = prompt(`Adicione o item dois a lista:`);
item_tres = prompt(`Adicione o item tres a lista:`);

listaCompras.push(item_um);
listaCompras.push(item_dois);
listaCompras.push(item_tres);

contem = listaCompras.includes("leite");
if(contem == false){

    listaCompras.push("leite");
};
console.log(listaCompras);
