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
        if (id === '0') continue;
        const selectedPlace = places.find((place) => place.id === id);

        // Add to history
        if (searches.history.length > 4) searches.history.pop();
        searches.addToHistory(
          `${selectedPlace?.name}, ${selectedPlace?.state}, ${selectedPlace?.country}`
        );

        const weather = await searches.cityWeather(selectedPlace?.lat, selectedPlace?.lon);

        // Show weather data
        console.log(
          `\nWeather in ${selectedPlace?.name}, ${selectedPlace?.state}, ${selectedPlace?.country}`
            .blue
        );
        console.log(`${'Lat:'.yellow} ${selectedPlace?.lat}`);
        console.log(`${'Lng:'.yellow} ${selectedPlace?.lon}`);
        console.log(`${'Temp:'.yellow} ${weather?.temp}°C`);
        console.log(`${'Feels like'.yellow}: ${weather?.feelsLike}°C`);
        console.log(`${'Pressure:'.yellow} ${weather?.pressure}pa`);
        console.log(`${'Humidity:'.yellow} ${weather?.humidity}%`);
        console.log(`${'Descrition:'.yellow} ${weather?.description}`);
        break;
      case 2: // History
        // Validation
        console.log('');

        const db = searches.readtoDB();
        if (db) searches.history = db;
        if (searches.history.length === 0) {
          console.log('History is empty');
          await pause();
          continue;
        }
        // Print history
        searches.history.forEach((value, i) => {
          const index = `${++i}.`.magenta;
          console.log(`${index} ${value}`);
        });
        break;
    }

    if (opt !== 3) await pause();
  } while (opt !== 3);
};

main();
