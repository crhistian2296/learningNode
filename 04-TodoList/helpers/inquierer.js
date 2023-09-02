const inquirer = require('inquirer');
require('colors');

const options = [
  {
    type: 'list',
    name: 'option',
    messages: 'What is your desire?',
    choices: [
      { value: '1', name: `${'1.'.blue} Add Todo` },
      { value: '2', name: `${'2.'.blue} Show Todos` },
      { value: '3', name: `${'3.'.blue} Show complete Todos` },
      { value: '4', name: `${'4.'.blue} Show incomplete Todos` },
      { value: '5', name: `${'5.'.blue} Complete Todos` },
      { value: '6', name: `${'6.'.blue} Delete Todos` },
      { value: '0', name: `${'0.'.blue} Exit` },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();

  // Header
  console.log('============================='.rainbow);
  console.log('       Choose an option      '.white);
  console.log('=============================\n'.rainbow);

  const { option } = await inquirer.prompt(options);

  return option;
};

const pause = async () => {
  const pauseValue = [
    { type: 'input', name: 'pauseInput', message: `Press ${'enter'.blue} to continue: ` },
  ];

  console.log('\n');

  const value = await inquirer.prompt(pauseValue);

  return value;
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

module.exports = { inquirerMenu, pause, readInput };
