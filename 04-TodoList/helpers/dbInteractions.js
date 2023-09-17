const fs = require('fs');
const { pause } = require('./inquierer');

const file = './db/data.json';

const saveToDB = (data) => {
  fs.writeFileSync(file, data);
};

const readtoDB = () => {
  try {
    fs.readFileSync(file);
  } catch (err) {
    pause();
    return null;
  }

  const data = fs.readFileSync(file, { encoding: 'utf-8' });
  const parsedData = JSON.parse(data);

  return parsedData;
};

module.exports = { saveToDB, readtoDB };
