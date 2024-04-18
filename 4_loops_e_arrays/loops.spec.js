const { somaAteN, listaImpares, contaCaracteres, criaMultiplicacao } = require('./loopExercises');

describe('Testes de loops', () => {

    test('Soma todos os números até N', () => {
        expect(somaAteN(5)).toBe(15);
        expect(somaAteN(10)).toBe(55);
    });

    test('Lista números ímpares até um limite', () => {
        expect(listaImpares(10)).toEqual([1, 3, 5, 7, 9]);
        expect(listaImpares(15)).toEqual([1, 3, 5, 7, 9, 11, 13, 15]);
    });

    test('Conta quantas vezes um caractere aparece em um texto', () => {
        expect(contaCaracteres("hello world", "o")).toBe(2);
        expect(contaCaracteres("repeat repeat repeat", "e")).toBe(6);
    });

});
