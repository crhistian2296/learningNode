require('colors');
require('dotenv').config();

const { inquirerMenu, pause, readInput } = require('./helpers/inquierer');
const { Searches } = require('./models/searches');

const main = async () => {
  let opt = 0;
  const searches = new Searches();

  do {
    opt = await inquirerMenu('what would you like to do?');
    opt = Number(opt);
    console.log({ opt });

    switch (opt) {
      case 1: //TODO: show message, search place, show possible choices, show weather data
        const place = await readInput('Search city: ');
        await searches.city(place);

        console.log(`\nWeather in ${place}`.blue);
        console.log('Lat:');
        console.log('Lng:');
        console.log('Temp:');
        console.log('Max Temp:');
        console.log('Min Temp:');
        break;
      case 2:
        console.log(2);
        break;

      default:
        break;
    }

    if (opt !== 3) await pause();
  } while (opt !== 3);
};

main();
