'use strict';

const assert = require('assert');
const thunkRedis = require('thunk-redis');

module.exports = app => {
  app.addSingleton('thunkRedis', createClient);
};

let count = 0;

function createClient(config, app) {
  const address = config.address;
  const options = config.options || {};

  assert(address !== undefined,
    '[egg-thunk-redis] address ' + address + 'are required on config ',
    'options: ' + options
  );

  app.coreLogger.info(`[egg-thunk-redis] connecting ${address}`);

  const client = thunkRedis.createClient(address, options);
  client.on('connect', function() {
    app.coreLogger.info('[egg-thunk-redis] connect success on ', address, ' options: ', options);
  });
  client.on('error', function(error) {
    app.coreLogger.error(error);
  });

  app.beforeStart(async () => {
    const result = await client.info();
    const index = count++;
    app.coreLogger.info(`[egg-thunk-redis] instance[${index}] status OK, redis currentTime: ${result[0]}`);
  });

  return client;
}
