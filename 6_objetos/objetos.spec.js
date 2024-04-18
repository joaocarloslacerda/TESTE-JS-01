const { retornaPropriedade, adicionaPropriedade } = require('./objetos');

describe('Testes com objetos', () => {

    test('Retorna o valor de uma propriedade de um objeto', () => {
        const objeto = { nome: "Sabino", idade: 32 };
        expect(retornaPropriedade(objeto, "nome")).toBe("Sabino");
        expect(retornaPropriedade(objeto, "idade")).toBe(32);
    });

    test('Adiciona uma nova propriedade a um objeto', () => {
        const objeto = { nome: "Bruna" };
        adicionaPropriedade(objeto, "idade", 32);
        expect(objeto.idade).toBe(32);
    });

});
