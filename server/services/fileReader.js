import fs from 'fs';

const fileReader = {

  readJsonFileSync: function (filepath, encoding) {

    if (typeof (encoding) == 'undefined') {
      encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
  },

  getFile: function (file) {

    var filepath = __dirname + '/../data/' + file;
    return this.readJsonFileSync(filepath);
  },

  getRandomItem: function (items) {
    var response;

    while (!response || response.picture === '') {
      response = items[Math.floor(Math.random() * items.length)];
    }

    return response;
  }
};

export default fileReader;