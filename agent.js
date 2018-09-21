'use strict';

const thunkRedis = require('./lib/redis');

module.exports = agent => {
  if (agent.config.thunkRedis.agent) thunkRedis(agent);
};
