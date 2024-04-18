const { classificaIdade, ehPar, podeVotar, encontraMaior } = require('./conditionalExercises');

describe('Testes de condicionais', () => {

    test('Classifica idade', () => {
        expect(classificaIdade(10)).toBe("criança");
        expect(classificaIdade(12)).toBe("adolescente");
        expect(classificaIdade(17)).toBe("adolescente");
        expect(classificaIdade(18)).toBe("adulto");
        expect(classificaIdade(25)).toBe("adulto");
    });

    test('Verifica se o número é par ou ímpar', () => {
        expect(ehPar(2)).toBe("par");
        expect(ehPar(3)).toBe("ímpar");
        expect(ehPar(10)).toBe("par");
        expect(ehPar(15)).toBe("ímpar");
    });

    test('Verifica se pode votar', () => {
        expect(podeVotar(15)).toBe("não pode votar");
        expect(podeVotar(16)).toBe("pode votar");
        expect(podeVotar(21)).toBe("pode votar");
    });

    test('Encontra o maior número entre três', () => {
        expect(encontraMaior(1, 2, 3)).toBe(3);
        expect(encontraMaior(10, 5, 7)).toBe(10);
        expect(encontraMaior(-1, -2, 0)).toBe(0);
    });

});
