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

        const selectedPlace = places.find((place) => place.id === id);
        const weather = await searches.cityWeather(selectedPlace?.lat, selectedPlace?.lon);

        console.log(
          `\nWeather in ${selectedPlace?.name}, ${selectedPlace?.state}, ${selectedPlace?.country}`
            .blue
        );
        console.log(`Lat: ${selectedPlace?.lat}`);
        console.log(`Lng: ${selectedPlace?.lon}`);
        console.log(`Temp: ${weather?.temp}°C`);
        console.log(`Feels like: ${weather?.feelsLike}°C`);
        console.log(`Pressure: ${weather?.pressure}pa`);
        console.log(`Humidity: ${weather?.humidity}%`);
        console.log(`Descrition: ${weather?.description}`);
        break;
      case 2: // Historic
        console.log(2);
        break;
    }

    if (opt !== 3) await pause();
  } while (opt !== 3);
};

main();
