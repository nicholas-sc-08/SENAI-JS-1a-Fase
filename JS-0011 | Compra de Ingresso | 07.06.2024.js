// 11) Um sistema de reservas de ingressos do cinema, que deve permitir que o usuário
// escolha o filme, o horário e o número de ingressos desejados. Após a seleção, deve ser
// exibido o total a ser pago. Exibir ao usuário opções de filmes e horários. Os valores do
// ingresso devem ser pré-definidos.
function escolha_de_filmes(){
const valor_do_ingresso_inteiro = 38;
let filmeA = `a`;
let filmeB = `b`;
let filmeC = `c`;
let escolha_de_filme;
let horario_filme = `18:30`;
let escolha_do_horario;
let quantidade_de_ingressos_desejados;
let total_a_ser_pago;

escolha_de_filme = prompt(`Escolha os filmes dísponiveis, entre os filmes: a, b, c.`);
if(escolha_de_filme == `a` || escolha_de_filme == `b` || escolha_de_filme == `c`){
    quantidade_de_ingressos_desejados = Number(prompt(`Quantos ingressos você deseja?`));
    total_a_ser_pago = valor_do_ingresso_inteiro * quantidade_de_ingressos_desejados;
    alert(`Horários disponíveis: ${horario_filme}Hrs.`);
    escolha_do_horario = prompt(`Qual horário você deseja ir?`);
    if(escolha_do_horario != horario_filme){
        alert(`Horário não existente!`);
        escolha_de_filmes();
    } else{
        alert(`Total a ser pago: R$${total_a_ser_pago}.`);
    };
} else{
    alert(`Filme não no cartaz!`);
    escolha_de_filmes();
};
};
escolha_de_filmes();
