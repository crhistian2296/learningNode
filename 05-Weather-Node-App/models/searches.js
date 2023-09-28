const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

class Searches {
  record = [''];

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
    return []; //arr wich contains all cities
  }
}

module.exports = { Searches };
