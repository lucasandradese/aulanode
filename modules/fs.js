const fs = require("fs");
const path = require("path");

// Criar um pasta

/*fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro:", error);
  }
  console.log("Pasta criada com sucesso!");
});
*/

// Criar um arquivo

fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello node",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");
  }
);

// adicionar conteudo no arquivo

fs.appendFile(
  path.join(__dirname, "/teste", "teste.html"),
  "hello my frients",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Alteração feita com sucesso!");
  }
);

// Ler arquivos

fs.readFile(
  path.join(__dirname, "/teste", "teste.html"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Error: ", error);
    }
    console.log(data);
  }
);
