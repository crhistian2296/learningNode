require('colors');

const { inquirerMenu, pause } = require('./helpers/inquierer');
// const { showMenu, pause } = require('./helpers/messages');

const main = async () => {
  let opt = '';

  do {
    opt = await inquirerMenu();
    console.log(opt);
    if (opt !== '0') await pause();
  } while (opt !== '0');
};

main();