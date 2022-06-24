//const { response, request } = require('express');

const { json } = require('express');
const express = require('express');
const {uuid} = require('uuidv4');

const app = express(); 
app.use(express.json());

//inicio da aula 8 do modulo 3, deixando a aplicação mais funcional

const projects = [];

//buscando uma informação
app.get('/project', (request, response) => {
  const {title, owner} = request.query;
  
  return response.json(projects);//resposta da requisição '/project'
});

//criando uma informação
app.post('/project', (request, response) => {
  const {title, owner} = request.query;
  const project = {id: uuid(), title, owner};
  
  projects.push(project);
  
  return response.json(project); /*project e não projects por que é pra imprimir o 
  project recem criado e não a lista toda*/
});

//alterando uma informação
app.put('/project/:id', (request, response) => {
  const {id} = request.params;
  const {title, owner} = request.query;
  
  const projectIndex = projects.findIndex(project => project.id == id);

  if (projectIndex < 0){
    return response.status(400).json({ error: 'project not found :('})
  }/*confesso que essa parte não entendi direito, mas irei revisar*/

  const project = {
    id,
    title,
    owner
  };

  projects[projectIndex] = project;

  return response.json(project);

});

//deletando uma informação
app.delete('/project/:id', (request, response) => {

  return response.json([
    {'peso':'75'}
  ]);
});

app.listen(3333, () => {
    console.log('backend iniciado no index2.js na porta 3333');
});