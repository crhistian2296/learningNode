const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Servir contenido estatico
// se hace uso del filesystem para servir el html, sino hay coincidencia se
// busca en las definicion de cada ruta (line 12-24)
app.use(express.static('public'));

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Crhistian',
    study: 'Node - Express',
  });
});
app.get('/elements', (req, res) => {
  res.render('elements');
});
app.get('/generic', (req, res) => {
  res.render('generic');
});
app.get('/hola-mundo', (req, res) => {
  res.send('Hello World in 8080 port');
});
// app.get('*', (req, res) => {
//   res.sendFile(`${__dirname}/public/404.html`);
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
