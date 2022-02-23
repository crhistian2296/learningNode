const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Take the base to return the determinate multiplication table',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: 'Returns the multiplication table in console',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: false,
    default: false,
    describe: 'Returns many multiplication tables',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) throw 'The base must be a number';
    return true;
  });

module.exports = argv;
