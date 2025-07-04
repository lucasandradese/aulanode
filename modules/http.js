const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<H1> Home page </H1>");
  }
  if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<H1> Contact </H1>");
  }
  if (req.url === "/user") {
    const user = [
      {
        name: "Lucas",
        year: "1997",
        email: "lucas@gmail.com",
      },

      {
        name: "Joyce",
        year: "1998",
        email: "joyce@gmail.com",
      },
    ];

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(user));
  }
});

server.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
