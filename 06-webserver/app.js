const express = require('express');
const app = express();
const port = 8080;

// SSR
// se hace uso del filesystem para servir el html, sino hay coincidencia se
// busca en las definicion de cada ruta (line 12-24)

app.use(express.static('public'));

app.get('/elements', (req, res) => {
  res.sendFile(`${__dirname}/public/elements.html`);
});
app.get('/generic', (req, res) => {
  res.sendFile(`${__dirname}/public/generic.html`);
});
app.get('/hola-mundo', (req, res) => {
  res.send('Hello World in 8080 port');
});
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
