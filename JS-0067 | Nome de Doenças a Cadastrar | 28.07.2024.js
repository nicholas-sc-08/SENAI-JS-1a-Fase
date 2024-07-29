// 2) Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, bactéria ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por bactérias, doenças transmitidas por ambos, lista com todas doenças.

let numero_de_doencas_a_cadastrar;
let nome_da_doenca;
let transmitida_por_virus;
let transmitida_por_bacterias;
let transmitida_por_ambos;
let vetor_nome_da_doenca = [];
let vetor_transmitida_por_virus = [];
let vetor_transmitida_por_bacterias = [];
let vetor_transmitida_por_ambos = [];

numero_de_doencas_a_cadastrar = parseInt(prompt(`Qual o número de doenças a ser cadastrado?`));

for(i = 0; i < numero_de_doencas_a_cadastrar; i++){

    nome_da_doenca = prompt(`Qual o nome da doença?`);
    vetor_nome_da_doenca.push(nome_da_doenca);
    
    transmitida_por_virus = prompt(`Ela é transmitida por vírus?`);

    transmitida_por_bacterias = prompt(`Ela é transmitida por bactérias?`);

    switch(true){

        case transmitida_por_virus.toUpperCase() == `SIM` && transmitida_por_bacterias.toUpperCase() == `SIM`:
            vetor_transmitida_por_ambos.push(nome_da_doenca);
            vetor_transmitida_por_bacterias.push(nome_da_doenca);
            vetor_transmitida_por_virus.push(nome_da_doenca);
            break;
        case transmitida_por_bacterias.toUpperCase() == `SIM` && transmitida_por_virus.toUpperCase() == `NÃO`:
            vetor_transmitida_por_bacterias.push(nome_da_doenca);
            break;
        case transmitida_por_bacterias.toUpperCase() == `NÃO` && transmitida_por_virus.toUpperCase() == `SIM`:
            vetor_transmitida_por_virus.push(nome_da_doenca);
            break;
        default:
            alert(`Favor digitar as respostas grámaticamente corretas.`);
            i--;
            break;

    };
};

alert(`Nome das doenças:\n\n${vetor_nome_da_doenca}\n\nTransimita por ambos:\n\n${vetor_transmitida_por_ambos}\n\nTransmitidas por vírus:\n\n${vetor_transmitida_por_virus}\n\nTransmitidas por bactérias:\n\n${vetor_transmitida_por_bacterias}`);
