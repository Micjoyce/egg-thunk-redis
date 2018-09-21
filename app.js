'use strict';

const thunkRedis = require('./lib/redis');

module.exports = app => {
  if (app.config.thunkRedis.app) thunkRedis(app);
};
