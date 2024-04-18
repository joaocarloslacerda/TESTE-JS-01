const { encontrarAluno, filtrarAlunos, construirAluno } = require('./extras');

describe('Testes com Arrays e Objetos de Alunos', () => {

    const listaAlunos = ["Ana", "João", "Carlos", "Maria", "Ana"];

    test('Encontrar aluno na lista', () => {
        expect(encontrarAluno("Carlos", listaAlunos)).toBe(true);
        expect(encontrarAluno("Pedro", listaAlunos)).toBe(false);
    });

    test('Filtrar alunos por nome', () => {
        expect(filtrarAlunos("Ana", listaAlunos)).toEqual(["Ana", "Ana"]);
        expect(filtrarAlunos("Pedro", listaAlunos)).toEqual([]);
    });

    test('Construir um objeto aluno', () => {
        expect(construirAluno("Lucas", 20)).toEqual({ nome: "Lucas", idade: 20 });
        expect(construirAluno("Marta", 22)).toEqual({ nome: "Marta", idade: 22 });
    });

});
