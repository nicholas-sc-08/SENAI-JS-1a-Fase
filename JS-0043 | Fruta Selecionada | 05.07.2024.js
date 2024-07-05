// 1) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar? “. Quando for adicionado a cereja, mostrar a frase “Sua salada de frutas está pronta!”


let fruta_selecionada;

do{
    fruta_selecionada = prompt(`Qual fruta deseja adicionar?`);
} while(fruta_selecionada != `Cereja`){
    
};

alert(`Sua salada de frutas está pronta!`);
