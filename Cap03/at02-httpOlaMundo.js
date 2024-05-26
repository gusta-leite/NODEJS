const http = require("http");

//Cria o serviço HTTP com uma callback que processa e responde as requisições.
const server = http.createServer((req, res) => {
  //Faz o cabeçalho da resposta
  res.setHeader("Contenty-Type", "text/html");
  //Responde a requesição
  res.end(`Olá Node.js!!!`);
});
//Ativa o servidor para poder escutar
server.listen("3200", () => {
  console.log("Servidor rodando...");
});
