/*
    Cola:
    Lembrem-se da condição de parada do loop.
    Dentro do loop, pode haver qualquer bloco de código que se repetirá
    Loops: for, while e do while
*/

function listaImpares(limite) {
    // Retorna um array contendo todos os números ímpares até 'limite'
    let valor = 0
    let array = []
    let i = 0
    do{
        if(valor % 2 != 0){
            // array.push(valor) --funcionou com o push, mas para estudo quis montar a lógica sem ele também
            array[i] = valor
            i++
        }
        valor++
    }while(valor <= limite)

    return array
}

/*
    Cola: Texto é um array de caracteres,
    então você pode acessar cada caractere individualmente com texto[i]
*/
function contaCaracteres(texto, caracter) {
    // Retorna a quantidade de vezes que 'caracter' aparece em 'texto'
    const tamanhoTexto = texto.length
    let cont = 0

    for(let i=0; i<tamanhoTexto; i++){
        if(caracter == texto[i]){
            cont++
        }
    }
    return cont
}

module.exports = {
    listaImpares,
    contaCaracteres,
};
