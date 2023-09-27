const axios = require('axios');

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

  async city(place = '') {
    // console.log('city =', place);
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/geo/1.0/direct?q=${place}`,
        params: this.OWParams,
      });
      const resp = await instance.get();
      console.log(resp);

      return [];
    } catch (err) {
      return [];
    }
    return []; //arr wich contains all cities
  }
}

module.exports = { Searches };
