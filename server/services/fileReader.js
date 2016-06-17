import fs from 'fs';

const readJsonFileSync = (filepath, encodingParam) => {
  let encoding = encodingParam;

  if (typeof (encoding) === 'undefined') {
    encoding = 'utf8';
  }
  const file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
};

const fileReader = {
  getFile: (file) => {
    const filepath = `${__dirname}/../data/${file}`;

    return readJsonFileSync(filepath);
  },

  getRandomItem: (items) => {
    let response;

    while (!response || response.picture === '') {
      response = items[Math.floor(Math.random() * items.length)];
    }

    return response;
  },
};

export default fileReader;
