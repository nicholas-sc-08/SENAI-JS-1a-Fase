// 1) Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos. Criar um programa no qual pergunte ao usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento nos últimos 10 anos”

let ano_ocorrido;
let ultimo_ano_ocorrido;
let pergunta_ao_usuario;
let vetor_anos_de_alistamento_exercitio = [];
for(i = 0; i != 10; i++){

    ano_ocorrido = `200${i}`;
    pergunta_ao_usuario = prompt(`Houve alistamento no exército no ano ${ano_ocorrido}?\n\nS - Sim\nN - não`);
    
    if(pergunta_ao_usuario.toUpperCase() == `S`){
        vetor_anos_de_alistamento_exercitio.push(parseInt(ano_ocorrido));
    console.log(vetor_anos_de_alistamento_exercitio);        
    } else if(pergunta_ao_usuario.toUpperCase() != `N`){
        alert(`Favor digitar S ou N.`);
    };
};

vetor_anos_de_alistamento_exercitio.sort();
ultimo_ano_ocorrido = vetor_anos_de_alistamento_exercitio[vetor_anos_de_alistamento_exercitio.length - 1]
if(vetor_anos_de_alistamento_exercitio.length != 0){
    alert(`Ultimo ano de alistamento foi no ano de: ${ultimo_ano_ocorrido}`);
} else {
    alert(`Não houve alistamento nos ultimos ${i} anos.`);
};
