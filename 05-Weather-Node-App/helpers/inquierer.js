const inquirer = require('inquirer');
require('colors');

const options = [
  {
    type: 'list',
    name: 'actions',
    messages: 'What is your desire?',
    choices: [
      { value: '1', name: `${'1.'.blue} Search city` },
      { value: '2', name: `${'2.'.blue} Historic` },
      { value: '3', name: `${'3.'.blue} Exit` },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();

  // Header
  console.log('============================='.rainbow);
  console.log('       Choose an option      '.white);
  console.log('=============================\n'.rainbow);

  const { actions } = await inquirer.prompt(options);

  return actions;
};

const pause = async () => {
  const pauseValue = [
    { type: 'input', name: 'pauseInput', message: `Press ${'enter'.blue} to continue: ` },
  ];

  console.log('\n');

  const value = await inquirer.prompt(pauseValue);

  return value;
};

const listPlaces = async (list = []) => {
  // { value: todo.id, name: `${'1.'.blue} Add Todo` },
  const choices = list.map((place, i) => {
    const index = `${i + 1}.`.blue;

    return {
      value: place.id,
      name: `${index} ${place.name}, ${place.state}, ${place.country}`,
    };
  });

  choices.unshift({ value: '0', name: `${'0.'.blue} Exit` });

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Select a city',
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questions);
  return id;
};

const confirm = async (message = '') => {
  const questions = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ];

  const { ok } = await inquirer.prompt(questions);
  return ok;
};

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) return 'Enter a valid value';
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);

  return desc;
};

const todoListCheck = async (list = []) => {
  // { value: todo.id, name: `${'1.'.blue} Add Todo` },
  const choices = list.map((todo, i) => {
    const index = `${i + 1}.`.blue;

    return {
      value: todo.id,
      name: `${index} ${todo.desc}`,
      checked: todo.complete ? true : false,
    };
  });

  const question = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Select',
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(question);
  return ids;
};

module.exports = { inquirerMenu, pause, readInput, listPlaces, confirm, todoListCheck };
