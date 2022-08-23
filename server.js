
const http = require('http');

http
.createServer((request,response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });


if (request.url === "/produto") {
   response.end(
      JSON.stringify({
      message: 'Produto cadastrado com sucesso',
      })
   )
}

if (request.url === "/usuario") {
   response.end(
      JSON.stringify({
         message: "rota de usuario",
      })
   );
}

}).listen(3000, console.log("servidor está rodando na port 3000"))






// npm install express
//node server.js
// npm install nodemon -g
// nodemon server.js
// testando o servidor http://localhost:3000
// testando o servidor 02 
// server is running on http://localhost:3000
