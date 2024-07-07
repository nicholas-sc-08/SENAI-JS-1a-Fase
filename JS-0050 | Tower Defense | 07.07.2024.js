// // 3) Em um jogo de Tower Defense, o castelo (torre) tem um total de 500 de HP. Faça um programa no qual o usuário possa escolher entre 3 tipos de ataque e um de defesa: 

// // A) Ataque Bomba -100HP
// // B) Ataque Granada -80HP
// // C) Ataque Arqueiro -40HP
// // D) Defesa Escudo +20HP

// Mostrar o HP do castelo atualizado a cada rodada. Caso o HP do castelo acabe, mostrar "Jogo encerrado, com X rodadas!"

let vida_da_torre = 500;
let jogo_acabou = false;
let resposta_usuario;
let resposta_valida = false;
let rodada = 0;
let quantia_de_vida_da_torre_minima = 0;
const dano_ataque_bomba = 100;
const dano_ataque_granada = 80;
const dano_ataque_arqueiro = 40;
const cura_defesa_escudo = 20;


while(jogo_acabou == false){
    resposta_usuario = prompt(`A) Ataque Bomba -100HP\nB) Ataque Granada -80HP\nC) Ataque Arqueiro -40HP\nD) Defesa Escudo +20HP`);

    
    switch(true){
        
    case resposta_usuario.toLocaleUpperCase() == `A`:
        vida_da_torre -= dano_ataque_bomba;
        resposta_valida = true;
        break;
    case resposta_usuario.toLocaleUpperCase() == `B`:
        vida_da_torre -= dano_ataque_granada;
        resposta_valida = true;
        break;
    case resposta_usuario.toLocaleUpperCase() == `C`:
        vida_da_torre -= dano_ataque_arqueiro;
        resposta_valida = true;
        break;
    case resposta_usuario.toUpperCase() == `D`:
        vida_da_torre += cura_defesa_escudo;
        resposta_valida = true;
        break;
    default:
        resposta_valida = false;
        break;                    
    };

    switch(true){
        case resposta_valida == false:
            alert(`Resposta inválida!`);
            break;
        default:
            alert(`Vida atual da torre: ${vida_da_torre} HP.`);
            break;
    };
    rodada++;

    if(vida_da_torre == quantia_de_vida_da_torre_minima){
        alert(`Jogo encerrado com ${rodada} rodadas!`);
        jogo_acabou = true;
    };
};
