const fs = require('fs');

const crearArchivo = async (base = 4) => {
  try {
    let salida = '';
    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${i * base}\n`;
    }

    const data = `
=========================
    TABLA DEL: ${base}
=========================
${salida}`.trim();
    fs.writeFileSync(`tabla-${base}.txt`, data);
    return `tabla-${base}.txt creada`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
