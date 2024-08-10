// 6) Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode montar seu sorvete com até 4 bolas (sabores). Criar um programa que simule esse sistema. A montagem do sorvete segue o modelo de estrutura PILHA, onde os sabores são "empilhados" um após o outro e quando algum tiver que ser removido, será sempre o último da pilha.

// 1- Adicionar sabor
// 2- Remover sabor
// 3- Visualizar sorvete
// 4- Finalizar pedido

// ======== MENSAGENS e VALIDAÇÕES ========
// Opção 1-> “Sabor adicionado!”   OU   “Limite de sabores atingido, remova um sabor!”
// Opção 2-> “Sabor removido!”   OU   “Não existem sabores adicionados!”
// Opção 3-> “"Camada 1 - Sabor X, Camada 2 - Sabor Y, etc.”   OU   “Seu sorvete não possui sabores!”
// Opção 4-> “Pedido realizado!”   OU   “Adicione pelo menos um sabor!”

const limite_de_sabores = 4;
const minimo_de_sabores = 1;
let vetor_de_sabores_de_sorvete = [];
let perguntar_ao_usuario;
let validacao = false;
let sabores_verificados = false;

for(i = 0;  validacao == false; i++){

    perguntar_ao_usuario = parseInt(prompt(`Escolha uma das opções abaixo:\n\n 
    1- Adicionar sabor\n
    2- Remover sabor\n
    3- Visualizar sorvete\n
    4- Finalizar pedido`));

        switch(true){

            case perguntar_ao_usuario > limite_de_sabores || perguntar_ao_usuario < minimo_de_sabores:
                alert(`Favor escolher uma das quatro opções!`);
                i--;
                break;

            case perguntar_ao_usuario == 1 && vetor_de_sabores_de_sorvete.length != 4:

            perguntar_ao_usuario = prompt(`Digite qual o nome do sabor na qual deseja adicionar.`);
            vetor_de_sabores_de_sorvete.push(perguntar_ao_usuario);
            break;

            case perguntar_ao_usuario == 2 && vetor_de_sabores_de_sorvete.length > 0:
                vetor_de_sabores_de_sorvete.pop();
            alert(`Sabor removido!`);
            break;

            case perguntar_ao_usuario == 3 && vetor_de_sabores_de_sorvete.length > 0:

            for(i = 0; i != vetor_de_sabores_de_sorvete.length; i++){

                alert(`Camada ${i} - sabor ${vetor_de_sabores_de_sorvete[i]}.`);
            };
            break;

            case perguntar_ao_usuario == 4 && vetor_de_sabores_de_sorvete.length > minimo_de_sabores:

                alert(`Pedido realizado!\n\nSabores escolhidos: ${vetor_de_sabores_de_sorvete.join(`, `)}.`);
                validacao = true;
                break;

            case vetor_de_sabores_de_sorvete < minimo_de_sabores:
                
                alert(`Não existem sabores adicionados!`);
                break;

            case perguntar_ao_usuario == 1 && vetor_de_sabores_de_sorvete.length > 4:
                alert(`Limite de sabores atingidos, ${i}.`);           
                break;

            case perguntar_ao_usuario == 4 && vetor_de_sabores_de_sorvete.length < minimo_de_sabores:

                alert(`Favor adicionar pelo menos 1 sabor!`);
                break;
        };
    };
