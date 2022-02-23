const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, show, limit) => {
  try {
    let table = '';
    let archivo = `=======================
    TABLA DEL: ${base}
=======================\n`;
    for (let i = 1; i <= limit; i++) {
      table += `${base} ${`x`.blue} ${i} ${`=`.blue} ${i * base}\n`;
      archivo += `${base} x ${i} = ${i * base}\n`;
    }

    const header = `${`=======================`.rainbow}
    TABLA DEL: ${`${base}`.green}
${`=======================`.rainbow}`;

    if (show) console.log(header + '\n' + table);

    fs.writeFileSync(`./output/tabla-${base}.txt`, archivo);

    return `tabla-${base}.txt creada`.magenta;
  } catch (err) {
    throw err.red;
  }
};

module.exports = {
  crearArchivo,
};
