# egg-thunk-redis

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-thunk-redis.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-thunk-redis
[travis-image]: https://img.shields.io/travis/eggjs/egg-thunk-redis.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-thunk-redis
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-thunk-redis.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-thunk-redis?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-thunk-redis.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-thunk-redis
[snyk-image]: https://snyk.io/test/npm/egg-thunk-redis/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-thunk-redis
[download-image]: https://img.shields.io/npm/dm/egg-thunk-redis.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-thunk-redis

<!--
Description here.
-->

## Install

```bash
$ npm i egg-thunk-redis --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.thunkRedis = {
  enable: true,
  package: 'egg-thunk-redis',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.thunkRedis = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
