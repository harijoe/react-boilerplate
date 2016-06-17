import axios from 'axios';

const client = axios.create({
  baseURL: '/api',
});

function ExceptionApi(message) {
  this.name = 'ExceptionApi';
  this.message = message;
}

export default {
  fetchName() {
    return client.get('/name')
      .then((response) => response.data)
      .catch((error) => {
        throw new ExceptionApi(error);
      });
  },

  fetchAnswer(nameId) {
    return client.get(`name/${nameId}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new ExceptionApi(error);
      });
  },

  submitNameAnswer(submission) {
    return client.post('/name', submission)
      .then((response) => response.data)
      .catch((error) => {
        throw new ExceptionApi(error);
      });
  },
};
