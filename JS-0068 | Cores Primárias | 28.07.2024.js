// 3) Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar em um vetor. Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias (laranja, verde, violeta) e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”. Um novo vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). No início dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco.

let vetor_cores_primarias = [];
let vetor_cores_secundarias = [];
let vetor_com_ambas_as_cores = [];
let perguntar_ao_usuario;

for(i = 0; i != 3; i++){

    perguntar_ao_usuario = prompt(`Digite uma cor primária:`);

    if(perguntar_ao_usuario == `amarelo` || perguntar_ao_usuario == `azul` || perguntar_ao_usuario == `vermelho`){
        vetor_cores_primarias.push(perguntar_ao_usuario);
        vetor_com_ambas_as_cores.push(vetor_cores_primarias[i]);
    } else {
        alert(`Favor digitar uma das cores primárias!`);
        i--;
    };
};

for(i = 0; i != 3; i++){

    perguntar_ao_usuario = prompt(`Digite uma cor secundária:`);

    if(perguntar_ao_usuario == `laranja` || perguntar_ao_usuario == `violeta` || perguntar_ao_usuario == `verde`){
        vetor_cores_secundarias.push(perguntar_ao_usuario);
        vetor_com_ambas_as_cores.push(vetor_cores_secundarias[i]);
    } else {
        alert(`Favor digitar uma das cores secundárias!`);
        i--;
    };
};

for(i = 0; i != 2; i++){

    perguntar_ao_usuario = prompt(`Adicionar no início da lista:`);

    if(perguntar_ao_usuario == `preto`){
        vetor_com_ambas_as_cores.unshift(perguntar_ao_usuario);
    } else if(perguntar_ao_usuario == `branco` && vetor_com_ambas_as_cores.includes(`preto`) == true){
        vetor_com_ambas_as_cores.push(perguntar_ao_usuario);
    } else {
        i--;
        alert(`Favor digitar uma cor neutra!`);
    };
};

localStorage.setItem(`vetor_com_ambas_as_cores`,JSON.stringify(vetor_com_ambas_as_cores));
JSON.parse(localStorage.getItem(vetor_com_ambas_as_cores));

alert(`Sequencia de cores:\n\n${vetor_com_ambas_as_cores.join(`, `)}.`);
