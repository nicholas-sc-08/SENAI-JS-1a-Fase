// 6) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 

let altura_do_usuario;
let peso_do_usuario;
let calculo_para_saber_o_IMC;
let numero_formatado;
altura_do_usuario = Number(prompt(`Qual a altura do usuário?`));
peso_do_usuario = Number(prompt(`Qual o peso do usuário?`));

calculo_para_saber_o_IMC = peso_do_usuario / (altura_do_usuario ** altura_do_usuario);
numero_formatado = calculo_para_saber_o_IMC.toLocaleString(`pt-BR`);

alert(`O seu IMC é de: ${numero_formatado.toFixed(2)}`);
