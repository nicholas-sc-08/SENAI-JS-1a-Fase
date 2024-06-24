// 2) Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano. Deve ser perguntado ao usuário o mês e a resposta deve ser numérica. Exemplo: Usuário digitou 3, que corresponde a março. Mostrar na tela "O mês possui 31 dias".

let opcao_usuario = parseInt(prompt(`Digite o mês (em valor numérico) para saber a quantidades de dias. `));

switch(opcao_usuario){

  case `1`:
    alert(`Janeiro, 31 dias.`);
    break;
    case `2`:
    alert(`Fevereiro, 29 dias.`);
    break;
    case `3`:
    alert(`Março, 31 dias.`);
    break;
    case `4`:
    alert(`Abril, 30 dias.`);
    break;
    case `5`:
    alert(`Maio, 31 dias.`);
    break;
    case `6`:
    alert(`Junho, 30 dias.`);
    break;
    case `7`:
    alert(`Julho, 31 dias.`);
    break;
    case `8`:
    alert(`Agosto, 31 dias.`);
    break;
    case `9`:
    alert(`Setembro, 30 dias.`);
    break;
    case `10`:
    alert(`Outubro, 31 dias.`);
    break;
    case `11`:
    alert(`Novembro, 30 dias.`);
    break;
    case `12`:
    alert(`Dezembro, 31 dias.`);
    break;
    default:
        alert(`Mês inválido, digite entre 1 a 12.`);
};
