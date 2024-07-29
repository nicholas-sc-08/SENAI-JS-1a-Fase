// 4) Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

// a) A quantidade de produtos com preço inferior a R$50;
// b) O nome dos produtos com preço de R$50 a R$100;
// c) A média dos preços dos produtos com preço superior a R$100.

const valor_max_inferior = 50;
const valor_max_superior = 100;
let vetor_nome_dos_produtos = [];
let vetor_preco_dos_produtos = [];
let vetor_produtos_com_precos_entre_cinquenta_a_cem = [];
let vetor_produtos_com_precos_acima_de_cem = [];
let nome_dos_produtos;
let soma_dos_produtos = 0;
let media_dos_produtos;
let preco_dos_produtos;
let quantidade_de_produtos = 0;


for(i = 1; i != 6; i++){

    nome_dos_produtos = prompt(`Digite o nome do ${i}º produto:`);
    preco_dos_produtos = parseFloat(prompt(`Digite o preço do produto, ${nome_dos_produtos} :`));

    vetor_nome_dos_produtos.push(nome_dos_produtos);
    vetor_preco_dos_produtos.push(preco_dos_produtos);

    if(preco_dos_produtos < valor_max_inferior){
        quantidade_de_produtos += 1;
    } else if(preco_dos_produtos >= valor_max_inferior && preco_dos_produtos < valor_max_superior){
        vetor_produtos_com_precos_entre_cinquenta_a_cem.push(nome_dos_produtos);
    } else if(preco_dos_produtos >= valor_max_superior){
        vetor_produtos_com_precos_acima_de_cem.push(preco_dos_produtos);
    } else {
        alert(`Favor digitar um valor acima de R$0.`);
        i--;
    };
};

for(i = 0; i < vetor_produtos_com_precos_acima_de_cem.length; i++){

    soma_dos_produtos += vetor_produtos_com_precos_acima_de_cem[i];
};

localStorage.setItem(`nome_dos_produtos`, JSON.stringify(vetor_nome_dos_produtos));
localStorage.setItem(`preco_dos_produtos`, JSON.stringify(vetor_preco_dos_produtos));
JSON.parse(localStorage.getItem(`nome_dos_produtos`));
JSON.parse(localStorage.getItem(`preco_dos_produtos`));

media_dos_produtos = soma_dos_produtos / vetor_produtos_com_precos_acima_de_cem.length;
