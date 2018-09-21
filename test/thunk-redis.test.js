'use strict';

const mock = require('egg-mock');

describe('test/thunk-redis.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/thunk-redis-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, thunkRedis')
      .expect(200);
  });
});
