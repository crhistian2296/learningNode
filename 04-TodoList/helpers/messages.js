require('colors');

const pause = (txt) => {
  return new Promise((resolve) => {
    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(txt, (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const showMenu = async () => {
  return new Promise((resolve) => {
    console.clear();

    // Header
    console.log('============================='.rainbow);
    console.log('       Choose an option      '.white);
    console.log('============================='.rainbow);

    console.log(`${'1.'.blue} Add Todo`);
    console.log(`${'2.'.blue} Show Todos`);
    console.log(`${'3.'.blue} Show complete Todos`);
    console.log(`${'4.'.blue} Show incomplete Todos`);
    console.log(`${'5.'.blue} Complete Todos`);
    console.log(`${'6.'.blue} Delete Todos`);
    console.log(`${'0.'.blue} Exit\n`);

    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`Choose an option and press ${'Enter'.blue}: `, (opt) => {
      console.log({ opt });
      readLine.close();
      resolve(opt);
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
