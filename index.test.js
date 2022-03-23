const { somar } = require("./src/funcoes.js");
var funcoes = require("./src/funcoes.js");
/*
https://jestjs.io/pt-BR/docs/getting-started
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

*/

// Passo 1. teste o seu teste
// Passo 2. refatore para o teste passar
// Passo 3. refatore para melhorar a qualidade
test("Somar Dois Numeros", function () {
  expect(somar(1, 1)).toBe(2);
});
