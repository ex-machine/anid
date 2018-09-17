# anid

Yet another unique **a**lpha**n**umeric **id** generator.

* mixed case by default (L1kETH4t)
* lower case option (l1keth4t)
* string length option
* very fast at default length (8 characters)
* reasonably fast at maximum length (24 characters)
* uses cryptographically insecure `Math.random()`
* UMD format, works in Node.js and browsers
* small footprint

[![Build Status](https://travis-ci.org/ex-machine/anid.svg?branch=master)](https://travis-ci.org/ex-machine/anid) [![Coverage Status](https://coveralls.io/repos/github/ex-machine/anid/badge.svg)](https://coveralls.io/github/ex-machine/anid) [![Less than 1 Kb](https://badge-size.herokuapp.com/ex-machine/anid/master/dist/anid.min.js)](https://github.com/ex-machine/anid.js/blob/master/dist/anid.min.js) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

## Installation

### NPM

```
npm i -S anid
```

### Yarn

```
yarn add anid
```


## API

```js
Anid([length = 8, [lowercase = false]])
```

Returns a function that generates alphanumeric unique id string.

## Usage

### Node.js

```js
const Anid = require('anid');

const anid = Anid();
const anidLowercase = Anid(null, true);
const anidLong = Anid(24);

console.log(anid()); // mXAL9KWY
console.log(anidLowercase()); // pumlrb7e
console.log(anidLong()); // NIJ174LksMaOOmykKkYce2UC
```

### Browser

```html
<script src="https://unpkg.com/anid/dist/anid.min.js"></script>
<script>

var anid = Anid();
var anidLowercase = Anid(null, true);
var anidLong = Anid(24);

console.log(anid()); // mXAL9KWY
console.log(anidLowercase()); // pumlrb7e
console.log(anidLong()); // NIJ174LksMaOOmykKkYce2UC
```

</script>

## License

[MIT](LICENSE)
