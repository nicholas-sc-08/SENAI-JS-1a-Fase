// 5) Você está fazendo um mochilão pela Europa e precisa saber qual a distância que vai percorrer em determinada viagem ou trecho da viagem, utilizando trem. De Bruxelas até Berlim são 764km e de Berlim até Praga são 350km. De Praga até Viena são mais 292km. De Viena até Budapeste, são outros 242km. Faça um sistema no qual o usuário digite a cidade de origem, em seguida a cidade de destino. Mostrar na tela a distância total (km) da viagem.

const bruxelas_ate_berlim = 764;
const berlim_ate_praga = 350;
const praga_ate_viena = 292;
const viena_ate_budapeste = 242;
let vetor_resposta_de_usuario = [];
let validacao = false;
let verificacao_berlim;
let verificacao_bruxelas;
let verificacao_viena;
let verificacao_budapeste;
let verificacao_praga;
let pergunta_do_usuario;
let soma = 0;
for(i = 0; validacao == false; i++){

    if(i == 0){

        pergunta_do_usuario = prompt(`Digite a cidade de origem entre:\n\n1) Bruxelas\n2) Berlim\n3) Praga\n4) Viena\n5) Budapeste\n`);

        if(pergunta_do_usuario.toUpperCase() == `VIENA` || pergunta_do_usuario.toUpperCase() == `BERLIM` || pergunta_do_usuario.toUpperCase() == `BRUXELAS` || pergunta_do_usuario.toUpperCase() == `BUDAPESTE` || pergunta_do_usuario.toUpperCase() == `PRAGA`){

            vetor_resposta_de_usuario.push(pergunta_do_usuario.toUpperCase());
        } else {

            alert(`Digite um dos locais fornecidos.`);
            i--;
        };
    };

    if(i == 1){

        pergunta_do_usuario = prompt(`Digite a cidade de chegada entre:\n\n1) Bruxelas\n2) Berlim\n3) Praga\n4) Viena\n5) Budapeste\n`);

        if(pergunta_do_usuario.toUpperCase() == `VIENA` || pergunta_do_usuario.toUpperCase() == `BERLIM` || pergunta_do_usuario.toUpperCase() == `BRUXELAS` || pergunta_do_usuario.toUpperCase() == `BUDAPESTE` || pergunta_do_usuario.toUpperCase() == `PRAGA`){

            vetor_resposta_de_usuario.push(pergunta_do_usuario.toUpperCase());
        } else {

            alert(`Digite um dos locais fornecidos.`);
            i--;
        };
    };

    
    
    if(vetor_resposta_de_usuario.length == 2){
        
        validacao = true;
    };
};

verificacao_berlim = vetor_resposta_de_usuario.includes(`BERLIM`);
verificacao_bruxelas = vetor_resposta_de_usuario.includes(`BRUXELAS`);
verificacao_viena = vetor_resposta_de_usuario.includes(`VIENA`);
verificacao_budapeste = vetor_resposta_de_usuario.includes(`BUDAPESTE`);
verificacao_praga = vetor_resposta_de_usuario.includes(`PRAGA`);

switch(true){
    
    case verificacao_berlim == true && verificacao_bruxelas == true:
        soma = bruxelas_ate_berlim;
        break;
    case verificacao_berlim == true && verificacao_praga == true:
        soma = berlim_ate_praga;
        break;
    case verificacao_praga == true && verificacao_viena == true:
        soma = praga_ate_viena;
        break;
    case verificacao_viena == true && verificacao_budapeste == true:
        soma = viena_ate_budapeste;
        break;
    case verificacao_bruxelas == true && verificacao_praga == true:
        soma = bruxelas_ate_berlim + berlim_ate_praga;
        break;
    case verificacao_bruxelas == true && verificacao_viena == true:
        soma = bruxelas_ate_berlim + berlim_ate_praga + praga_ate_viena;
        break;
    case verificacao_bruxelas == true && verificacao_budapeste == true:
        soma = bruxelas_ate_berlim + berlim_ate_praga + praga_ate_viena + viena_ate_budapeste;
        break;
    case verificacao_berlim == true && verificacao_viena == true:
        soma = bruxelas_ate_berlim + berlim_ate_praga + praga_ate_viena;
        break;
    case verificacao_berlim == true && verificacao_budapeste == true:
        soma = bruxelas_ate_berlim + berlim_ate_praga + praga_ate_viena + viena_ate_budapeste;
        break;
    case verificacao_praga == true && verificacao_budapeste == true:
        soma  = praga_ate_viena + viena_ate_budapeste;
        break;
    };

    alert(`O distância total de kilometros será de: ${soma} km`);
