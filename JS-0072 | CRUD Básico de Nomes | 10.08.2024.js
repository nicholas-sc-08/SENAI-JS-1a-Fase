//  7) Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

//  ======== MENU ========
//  1- Cadastrar nome
//  2- Excluir um nome
//  3- Editar um nome
//  4- Pesquisar se um nome está cadastrado
//  5- Listar todos os nomes cadastrados
//  0- Sair do programa

let vetor_de_nomes = [];
let escolha_do_usuario;
let sair_do_programa = false;
let pegar_posicao_nome;
let pegar_se_nome_existe;
for(i = 0; sair_do_programa == false ;i++){

    escolha_do_usuario = parseInt(prompt(`
 ======== MENU ========\n
 1- Cadastrar nome\n
 2- Excluir um nome\n
 3- Editar um nome\n
 4- Pesquisar se um nome está cadastrado\n
 5- Listar todos os nomes cadastrados\n
 0- Sair do programa`));

    if(escolha_do_usuario == 1){
        
        escolha_do_usuario = prompt(`Digite um nome a cadastrar:`);
        vetor_de_nomes.push(escolha_do_usuario);
    } else if(escolha_do_usuario == 2){
        escolha_do_usuario = prompt(`Digite o nome na qual você queira deletar:`);

        pegar_se_nome_existe = vetor_de_nomes.includes(escolha_do_usuario);

        if(pegar_se_nome_existe == true){
            pegar_posicao_nome = vetor_de_nomes.indexOf(escolha_do_usuario);
           vetor_de_nomes.splice(pegar_posicao_nome, 1,);
            alert(`Nome excluido!`);
        } else {
            alert(`Nome não existente!`);
            i--;
        };
    } else if(escolha_do_usuario == 3){

        escolha_do_usuario = prompt(`Digite o nome na qual queira editar.`);

        pegar_se_nome_existe = vetor_de_nomes.includes(escolha_do_usuario);

        if(pegar_se_nome_existe == true){
            
            pegar_posicao_nome = vetor_de_nomes.indexOf(escolha_do_usuario);
            escolha_do_usuario = prompt(`Digite para qual nome deseja mudar.`);

        } else {
            alert(`Nome não existente!`);
            i--;
        };
    } else if(escolha_do_usuario == 4){

        escolha_do_usuario = prompt(`Digite o nome na qual nome você deseja pesquisar.`);

        pegar_se_nome_existe = vetor_de_nomes.includes(escolha_do_usuario);

        if(pegar_se_nome_existe == true){
            
            pegar_posicao_nome = vetor_de_nomes.indexOf(escolha_do_usuario);
            alert(`Nome Cadastrado!\n${vetor_de_nomes[pegar_posicao_nome]}.`);
        } else {
            alert(`Nome não existente!`);
            i--;
        };
    } else if(escolha_do_usuario == 5){

        alert(`Nomes Cadastrados: ${vetor_de_nomes.join(`, `)}.`);
    } else if( escolha_do_usuario == 0){

        alert(`Saiu do programa.`);
        sair_do_programa = true;
    } else {
        alert(`Favor digitar uma das opcões válidas!`);
    };
    console.log(vetor_de_nomes);
};
