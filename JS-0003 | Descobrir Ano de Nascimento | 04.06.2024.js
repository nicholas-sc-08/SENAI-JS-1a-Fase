// 3) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY).
// Em seguida mostre na tela qual a idade do usuário em anos.


var ano_de_seu_nascimento;
var ano_atual;
var calculo_para_saber_idade_usuario
ano_de_seu_nascimento = Number(prompt(`Digite o seu ano de nascimento: `));
ano_atual = Number(prompt(`Digite o ano atual: `));
calculo_para_saber_idade_usuario = ano_atual - ano_de_seu_nascimento;

alert(`A sua idade é de: ${calculo_para_saber_idade_usuario} anos.`);
