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
    salario: 1500,
  },
];

const idSample = 3;

const getEmpleado = (id) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;

  return new Promise((resolve, reject) =>
    empleado ? resolve(empleado) : reject(`No existe el empleado con id ${id} `)
  );
};

const getSalario = (id) => {
  const salario = salarios.find((s) => s.id === id)?.salario;

  return new Promise((resolve, reject) =>
    salario ? resolve(salario) : reject(`No existe el salario del empleado con id ${id} `)
  );
};
// *llamado individual
// getEmpleado(idSample)
//   .then((empleado) => console.log(empleado))
//   .catch(console.log);

// getSalario(idSample)
//   .then((salario) => console.log(salario))
//   .catch(console.log);

//* llamado callbackHell
// getEmpleado(idSample)
//   .then((empleado) =>
//     getSalario(idSample)
//       .then((salario) => console.log(`El empleado ${empleado} tiene un salario de ${salario}`))
//       .catch(console.error)
//   )
//   .catch(console.error);

//* llamado no anidado
let nombre;
getEmpleado(idSample)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(idSample);
  })
  .then((salario) => console.log(`El empleado ${nombre} tiene un salario de`, salario))
  .catch(console.log);
