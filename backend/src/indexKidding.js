const express = require('express');
const app = express();

app.get('/projectOne', (request, response) => {
  return response.json({ message:'olá mundo denovo'});
});

app.listen(3333, ()=>{
  console.log("backend iniciado na porta 3334 indexKidding.js")
});