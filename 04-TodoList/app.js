require('colors');

const { inquirerMenu } = require('./helpers/inquierer');
// const { showMenu, pause } = require('./helpers/messages');

const main = async () => {
  let opt = '';

  do {
    opt = await inquirerMenu();
    // if (opt !== '0') await pause(`Press ${'enter'.blue} to continue: `);
    console.log(opt);
  } while (opt !== '0');
};

main();
