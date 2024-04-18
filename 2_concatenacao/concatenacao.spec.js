const { concatenaTexto, concatenaTextoNumero, concatenaNumeroTexto } = require('./textNumberOperations');

describe('Testes de concatenação de texto e números', () => {

    test('Testa concatenação de dois textos', () => {
        expect(concatenaTexto("Olá, ", "mundo!")).toBe("Olá, mundo!");
        expect(concatenaTexto("123", "456")).toBe("123456");
        expect(concatenaTexto("", "Texto")).toBe("Texto");
    });

    test('Testa concatenação de texto com número', () => {
        expect(concatenaTextoNumero("Idade: ", 30)).toBe("Idade: 30");
        expect(concatenaTextoNumero("Ano ", 2021)).toBe("Ano 2021");
        expect(concatenaTextoNumero("", 100)).toBe("100");
    });

    test('Testa concatenação de número com texto', () => {
        expect(concatenaNumeroTexto(300, " metros")).toBe("300 metros");
        expect(concatenaNumeroTexto(2050, " - ano futuro")).toBe("2050 - ano futuro");
        expect(concatenaNumeroTexto(0, " é zero")).toBe("0 é zero");
    });

});