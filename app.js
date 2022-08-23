const express = require("express");

const app = express();
const {randomUUID} = require("cripto");
const { name } = require("ejs");

app.use(express.json());

const products = [];

 /**
  * post - criar
  * get - buscar
  * put - atualizar
  * delete - deletar
  */
  /**
   * body - corpo da requisição
   * params - parametros da requisição
   * query - parametros da requisição
   */
app.post("/products", (request, response) => {
    // Nome e name e price
    const { name, price }= request.body;
    
    const product = {
        name,
        price,
        id: randomUUID(),
    };

    products.push(product);
    
    return response.json(product);
} ); // fim do post

app.listen(4002, () =>  console.log("servidor está rodando na porta 4002"));
//*Usei rest cliente para testar o servidor http://localhost:4002/products*/

