const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

// const [a, filePath] = process.argv;
// console.log(filePath);

const base = 9;

crearArchivo(base)
  .then((msg) => console.log)
  .catch(console.log);
