const { response, request } = require('express');
const express = require('express'); 
const app = express(); 
app.use(express.json());

//buscando uma informação
app.get('/project', (request, response) => {
  const {title, owner} = request.query;
  //isso aqui é uma manipulação de query params
  console.log(owner);
  console.log(title);
  
  return response.json([
    {'nome':'carlos'},
    {'idade':'21'},
    {'sexo':'masculino'}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  ]);//resposta da requisição '/project'
});

//criando uma informação
app.post('/project', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json([
    {'altura':'1.66'},
    {'peso':'73'}
  ]);
});

//alterando uma informação
app.put('/project/:id', (request, response) => {
  const params = request.params;
  
  console.log(params);

  return response.json([
    {'idade':'22'}
  ]);
});

//deletando uma informação
app.delete('/project/:id', (request, response) => {

  return response.json([
    {'peso':'75'}
  ]);
});

app.listen(3333, () => {
    console.log('backend iniciado! index porta 3333');
}); 