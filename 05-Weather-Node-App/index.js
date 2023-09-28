require('colors');
require('dotenv').config();

const { inquirerMenu, pause, readInput, listPlaces } = require('./helpers/inquierer');
const { Searches } = require('./models/searches');

const main = async () => {
  let opt = 0;
  const searches = new Searches();

  do {
    opt = await inquirerMenu('what would you like to do?');
    opt = Number(opt);

    switch (opt) {
      case 1: // Search city
        const place = await readInput('Search city: ');

        // Search places
        const places = await searches.cities(place);
        // Choose city
        const id = await listPlaces(places);
        console.log({ id });

        const selectedPlace = places.find((place) => place.id === id);

        console.log(
          `\nWeather in ${selectedPlace.name}, ${selectedPlace.state}, ${selectedPlace.country}`
            .blue
        );
        console.log(`Lat: ${selectedPlace.lat}`);
        console.log(`Lng: ${selectedPlace.lon}`);
        console.log(`Temp: `);
        console.log(`Max Temp: `);
        console.log(`Min Temp: `);
        break;
      case 2: // Historic
        console.log(2);
        break;
    }

    if (opt !== 3) await pause();
  } while (opt !== 3);
};

main();
