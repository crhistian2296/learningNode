const fs = require('fs');

const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

class Searches {
  history = [];
  dbPath = './db/data.json';

  constructor() {
    // TODO: Read DB
  }

  get OWParams() {
    return {
      limit: '5',
      appid: process.env.OPEN_WEATHER_KEY,
    };
  }

  async cities(place = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/geo/1.0/direct?q=${place}`,
        params: this.OWParams,
      });
      const { data } = await instance.get();

      return data.map((location) => ({
        id: uuidv4(),
        name: `${location.name}, ${location.state}, ${location.country}`,
        ...location,
      }));
    } catch (err) {
      return [];
    }
  }

  async cityWeather(lat = '', lon = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/onecall`,
        params: {
          lat,
          lon,
          units: 'metric',
          exclude: 'minutely,hourly,daily',
          appid: 'dc95562776b6b4eaf655bac72e985edb',
        },
      });

      const { data } = await instance.get();
      return {
        lat: data?.lat,
        lon: data?.lon,
        temp: data?.current?.temp,
        feelsLike: data?.current?.feels_like,
        pressure: data?.current?.pressure,
        humidity: data?.current?.humidity,
        description: data?.current?.weather[0]?.description,
      };
    } catch (err) {
      return {};
    }
  }

  addToHistory(search = '') {
    if (this.history.includes(search)) return;
    this.history.unshift(search);
    this.addToDB(this.history);
  }

  addToDB() {
    fs.writeFileSync(this.dbPath, JSON.stringify(this.history));
  }

  readtoDB = () => {
    try {
      fs.readFileSync(this.dbPath);
    } catch (err) {
      pause();
      return null;
    }

    const data = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
    const parsedData = JSON.parse(data);

    return parsedData;
  };
}

module.exports = { Searches };
