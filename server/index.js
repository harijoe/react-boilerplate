/* eslint consistent-return:0 */

import express from 'express';
import logger from './logger';
import minimist from 'minimist';
import setup from './middlewares/frontendMiddleware';
import { resolve } from 'path';

import api from './routes/api';
import error404 from './routes/404';
const bodyParser = require('body-parser');

const isDev = process.env.NODE_ENV !== 'production';
const argv = minimist(process.argv.slice(2));
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;

// In production we need to pass these values in instead of relying on webpack
const app = express();

app.use(bodyParser.json());

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
app.use('/api', api);
app.use('/api/*', error404);

const bootedApp = setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended port number, use port 3000 if not provided
const port = argv.port || process.env.PORT || 3000;

// Start your app.
bootedApp.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
    });
  } else {
    logger.appStarted(port);
  }
});
