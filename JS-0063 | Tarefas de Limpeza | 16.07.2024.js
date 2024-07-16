/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

let tarefasLimpeza = [];
let tarefa_um = prompt(`Adicione uma tarefa:`);
let tarefa_dois = prompt(`Adicione uma tarefa:`);
let tarefa_tres = prompt(`Adicione uma tarefa:`);
let tarefa_quatro = prompt(`Adicione uma tarefa:`);

tarefasLimpeza = [tarefa_um, tarefa_dois, tarefa_tres, tarefa_quatro];


tarefasLimpeza.splice(2, 1);
tarefasLimpeza.splice(1, 1, "limpar banheiro");
console.log(tarefasLimpeza);
