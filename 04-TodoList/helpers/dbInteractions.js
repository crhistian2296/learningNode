const fs = require('fs');

const file = './db/data.json';

const saveToDB = (data) => {
  fs.writeFileSync(file, data);
};

const readtoDB = () => {
  if (!fs.readFileSync(file)) return null;
  const data = fs.readFileSync(file, { encoding: 'utf-8' });
  const parsedData = JSON.parse(data);

  return parsedData;
};

module.exports = { saveToDB, readtoDB };
