const empleados = [
  {
    id: 1,
    nombre: 'Carlos',
  },
  {
    id: 2,
    nombre: 'Maria',
  },
  {
    id: 3,
    nombre: 'Alex',
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    nombre: 1500,
  },
];

const idSample = 10;

// definicion de funciones
const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;
  if (!empleado) return callback(`El empleado ${id} no existe`);
  callback(null, empleado);
};

const getSalario = (id, callback) => {
  const salario = salarios.find((salario) => salario.id === id)?.salario;
  if (!salario) return callback(`El salario del empleado ${id} no existe`);
  callback(null, salario);
};

// llamado de funciones
getEmpleado(idSample, (err, empleado) => {
  if (err) {
    console.log('ERROR!');
    return console.log(err);
  }
  console.log('Empleado existe');
  return console.log(empleado);
});

// getSalario(num) => salario: num

getSalario(idSample, (err, salario) => {
  if (err) {
    return console.log(err);
  }

  console.log('Salario existe');
  return console.log(salario);
});

/* Puede pasar en algun momento que por querer retornar empleado y salario todo a la vez anidemos muchas funciones de callback. Eso es conocido como callbackHell
*getEmpleado(idSample, (err, empleado) => {
  if (err) {
    console.log('ERROR!');
    return console.log(err);
  }

  *getSalario(idSample, (err, salario) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`El empleado ${empleado} tiene un salario de: ${salario}`);
});
});


*/
