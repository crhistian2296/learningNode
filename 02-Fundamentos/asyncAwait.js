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

const idSample = 1;

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

const getInfoUsuario = async (id) => {
  const empleado = await getEmpleado(id);
  const salario = await getSalario(id);
  return `El empleado ${empleado} tiene un salario de ${salario}`;
};

getInfoUsuario(idSample).then(console.log).catch(console.log);
