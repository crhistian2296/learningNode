require('colors');

const { inquirerMenu, pause } = require('./helpers/inquierer');
const { Todo } = require('./models/todo');
// const { showMenu, pause } = require('./helpers/messages');

const main = async () => {
  let opt = '';

  do {
    // opt = await inquirerMenu();
    // console.log(opt);

    const todo = new Todo('Eat with Karen');
    console.log(todo);

    if (opt !== '0') await pause();
  } while (opt !== '0');
};

main();
