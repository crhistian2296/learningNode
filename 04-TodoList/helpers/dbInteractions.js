const fs = require('fs');

const file = './db/data.json';

const saveToDB = (data) => {
  fs.writeFileSync(file, data);
};

const readtoDB = () => {
  if (!fs.readFileSync(file)) return null;
  const data = fs.readFileSync(file, { encoding: 'utf-8' });
  const parsedData = JSON.parse(data);
  console.log(parsedData);

  return null;
};

module.exports = { saveToDB, readtoDB };
