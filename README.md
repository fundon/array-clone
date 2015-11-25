# array-clone(arr, arr.length)

Fast Array Clone, See https://github.com/nodejs/node/pull/3976.

[![NPM version][npm-img]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]
[![Build status][travis-img]][travis-url]
[![Test coverage][coveralls-img]][coveralls-url]
[![Dependency status][david-img]][david-url]
[![License][license-img]][license-url]

## Install

```sh
$ npm install --save array-clone
```

## Usage

```js
const arrayClone = require('array-clone')

const newArray = arrayClone(new Array(1000), 1000)
```


[npm-img]: https://img.shields.io/npm/v/array-clone.svg?style=flat-square
[npm-url]: https://npmjs.org/package/array-clone
[travis-img]: https://img.shields.io/travis/fundon/array-clone.svg?style=flat-square
[travis-url]: https://travis-ci.org/fundon/array-clone
[coveralls-img]: https://img.shields.io/coveralls/fundon/array-clone.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/fundon/array-clone?branch=master
[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
[david-img]: https://img.shields.io/david/fundon/array-clone.svg?style=flat-square
[david-url]: https://david-dm.org/fundon/array-clone
[downloads-image]: https://img.shields.io/npm/dm/array-clone.svg?style=flat-square
