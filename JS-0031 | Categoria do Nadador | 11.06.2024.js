// 13) Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
//   - "Infantil A" de 5 a 10 anos de idade.
//   - "Juvenil A" de 11 a 17 anos de idade.
//   - "Senior" com 18 anos de idade ou mais

function saber_categoria_do_nadador(){
    let idade_do_nadador;
    const valor_inicial_infantil = 5;
    const valor_final_infantil = 10;
    const valor_inicial_juvenil = 11;
    const valor_final_juvenil = 17;
    const categoria_a = `Infantil`;
    const categoria_b = `Juvenil`;
    const categoria_c = `Senior`;
    idade_do_nadador = parseInt(prompt(`Qual a idade do(a) nadador(a)?`));

    if(idade_do_nadador >= valor_inicial_infantil || idade_do_nadador <= valor_final_infantil){
        alert(`Categoria: ${categoria_a}. `)
    } else if(idade_do_nadador >= valor_inicial_juvenil || idade_do_nadador <= valor_final_juvenil){
        alert(`Categoria: ${categoria_b}.`);
    } else {
        alert(`Categoria: ${categoria_c}.`);
    };
};
