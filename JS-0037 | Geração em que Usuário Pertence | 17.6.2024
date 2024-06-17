// 1) Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele pertence:

// Sem Geração (até 1945)
// Baby Boomers (nascidos entre 1946 e 1964)
// Geração X (1965-1980)
// Geração Y ou Millennials (1981-1996)
// Geração Z (1997-2010)
// Geração Alfa (a partir de 2011)

let ano_em_que_usuario_nasceu;
const sem_geracao = 1945;
const limite_ano_considerado_boomer = 1964;
const limite_ano_considerado_x = 1980;
const limite_ano_considerado_y = 1996;
const limite_ano_geracao_z = 2010;
ano_em_que_usuario_nasceu = parseInt(prompt(`Digite o ano em que nasceu:`));

switch(true){

  case ano_em_que_usuario_nasceu <= sem_geracao:

  alert(`Sem geração.`);

  break;

  case ano_em_que_usuario_nasceu > sem_geracao && ano_em_que_usuario_nasceu <= limite_ano_considerado_boomer:

  alert(`Geração Baby Boomers.`);
   
  break;

  case ano_em_que_usuario_nasceu > limite_ano_considerado_boomer && ano_em_que_usuario_nasceu  <= limite_ano_considerado_x:

  alert(`Geração X.`);

  break;

  case ano_em_que_usuario_nasceu > limite_ano_considerado_x && ano_em_que_usuario_nasceu <= limite_ano_considerado_y:

  alert(`Geração Y.`);

  break;

  case ano_em_que_usuario_nasceu > limite_ano_geracao_z:
    alert(`Geração Alpha.`) 
  break;
};
