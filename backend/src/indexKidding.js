const express = require('express');
const app = express();

app.get('/projectOne', (request, response) => {
  return response.json({ message:'olá mundo denovo'});
});

app.listen(3334);