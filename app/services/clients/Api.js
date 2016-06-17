import axios from 'axios';
import _ from 'lodash';

const client = axios.create({
  baseURL: '/api'
});

export default {
  fetchName() {
    return client.get('/name')
      .then((response) => {
        return response.data;
      })
      .catch( (error) => {
        throw new ExceptionApi(error);
      });
  },

  fetchAnswer(nameId) {
    return client.get('name/'+nameId)
      .then((response) => {
        return response.data
      })
      .catch( (error) => {
        throw new ExceptionApi(error);
      });
  },

  submitNameAnswer(submission) {
    return client.post('/name', submission)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new ExceptionApi(error);
      })
  }
}

function ExceptionApi(message) {
  this.name = 'ExceptionApi';
  this.message = message;
}