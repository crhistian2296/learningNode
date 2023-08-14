require('colors');

const { showMenu, pause } = require('./helpers/messages');

const main = async () => {
  let opt = '';

  do {
    opt = await showMenu();
    if (opt !== '0') await pause(`Press ${'enter'.blue} to continue: `);
  } while (opt !== '0');
};

main();
