const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/hola-mundo', (req, res) => {
  res.send('Hello World in 8080 port');
});
app.get('*', (req, res) => {
  res.send('404 | Page not Found');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
