'use strict';

/**
 * egg-thunk-redis default config
 * @member Config#thunkRedis
 * @property {String} SOME_KEY - some description
 */
exports.thunkRedis = {
  app: true,
  agent: false,
  // Single Redis
  // client: {
  //   address: number | string | string[] | number[],
  //   options: {}
  // },

  // Multi Redis
  // clients: {
  //   instance1: {
  //   address: number | string | string[] | number[],
  //   options: {}
  // },
  //   instance2: {
  //   address: number | string | string[] | number[],
  //   options: {}
  // },
  // },
};
