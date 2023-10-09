const http = require('http');

const person = {
  id: 1,
  name: 'Crhistian',
};

http
  .createServer((req, res) => {
    // console.log(req);
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader('Content-Dispositon', 'attachment; filename=list.csv');
    res.write(JSON.stringify(person));
    res.end();
  })
  .listen(8080);

console.log('Escuchando el puerto 8080');
