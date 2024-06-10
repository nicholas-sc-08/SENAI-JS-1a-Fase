// 7) Fazer um programa no qual o usuário digite a sua altura e o seu peso,
// ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na 
// faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).

let altura_digitada;
let peso_digitado;
const dobro = 2;
let imc;
const peso_considerado_baixo = 18;
const peso_considerado_ideal = 25;

altura_digitada = Number(prompt(`Digite sua altura:`));
peso_digitado = Number(prompt(`Digite seu peso:`));

imc = peso_digitado / (altura_digitada ** dobro);

if(imc < peso_considerado_baixo ) {
    alert(`IMC considerado baixo. ${imc.toFixed(2)}`);
} else if(imc >= peso_considerado_baixo || imc < peso_considerado_baixo){
    alert(`IMC considerado ideal. ${imc.toFixed(2)}`);
} else {
    alert(`IMC considerado alto. ${imc.toFixed(2)}`);
};
