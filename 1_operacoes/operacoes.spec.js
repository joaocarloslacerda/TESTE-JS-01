const { soma, subtracao, multiplicacao, divisao } = require('./operacoes.js');

describe('Testes de operações básicas', () => {

    test('Testa soma de dois números', () => {
        expect(soma(1, 2)).toBe(3);
        expect(soma(-1, -2)).toBe(-3);
        expect(soma(-1, 1)).toBe(0);
    });

    test('Testa subtração de dois números', () => {
        expect(subtracao(10, 5)).toBe(5);
        expect(subtracao(-1, -2)).toBe(1);
        expect(subtracao(-1, 1)).toBe(-2);
    });

    test('Testa multiplicação de dois números', () => {
        expect(multiplicacao(3, 4)).toBe(12);
        expect(multiplicacao(-1, -2)).toBe(2);
        expect(multiplicacao(-1, 2)).toBe(-2);
    });

    test('Testa divisão de dois números', () => {
        expect(divisao(10, 2)).toBe(5);
        expect(divisao(-6, -3)).toBe(2);
        expect(divisao(-6, 3)).toBe(-2);
    });

});

