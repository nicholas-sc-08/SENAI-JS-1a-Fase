/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/


let tarefas = [];
let tarefa_um;
let tarefa_dois;
let tarefa_tres;

tarefa_um = prompt(`Adicione uma tarefa  a lista:`);
tarefa_dois = prompt(`Adicione uma tarefa  a lista:`);
tarefa_tres = prompt(`Adicione uma tarefa  a lista:`);

tarefas = [tarefa_um, tarefa_dois, tarefa_tres];

tarefas.push(`Ligar para o médico`);

tarefas.splice(1, 1);
console.log(tarefas);
