const path = require("path");

// Nome do diretório atual

console.log(path.dirname(__filename));

// Nome do arquivo atual

console.log(path.basename(__filename));

// A extensão do arquivo

console.log(path.extname(__filename));

// Criar objeto Path

console.log(path.parse(__filename));

// Juntar caminho de arquivos

console.log(path.join(__dirname, "teste"));
console.log(path.join(__dirname, "teste", "teste.txt"));
