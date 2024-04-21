

function encontrarAluno(nomeAluno, listaNomeAlunos) {
    // Retorna true se o nome do aluno está na lista, false caso contrário
    let i=0;
    let resultado;

    for(i; i<listaNomeAlunos.length; i++){
        if(listaNomeAlunos[i] === nomeAluno){
            resultado = true;
            break;
        }
        else{
            resultado = false;
        }
    }
    return resultado;
}

function filtrarAlunos(nomeAluno, listaNomeAlunos) {
    // Retorna uma lista de alunos que correspondem ao nome fornecido
    let novaLista = [];
    let i;
    let j = 0;
    
    for(i=0; i<listaNomeAlunos.length; i++){
        if(listaNomeAlunos[i] == nomeAluno){
            novaLista[j] = listaNomeAlunos[i];
            j++;
        }
    }
    return novaLista;
}

function construirAluno(nomeAluno, idadeAluno) {
    // Constrói e retorna um objeto aluno com nome e idade
    const objeto = {
        nome: nomeAluno,
        idade: idadeAluno
    };
    return objeto;
}

module.exports = {
    encontrarAluno,
    filtrarAlunos,
    construirAluno
};
