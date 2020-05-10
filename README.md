# path-shell

Nodejs wrapper around files existing on root.

[![Build Status](https://travis-ci.com/Jithinqw/path-shell)
https://travis-ci.com/Jithinqw/path-shell.svg?branch=master)]

# Installation

Install using `npm i path-shell --save`.

# Usage

```javascript
const pathShell = require('path-shell');
const mode = 'json'
//get history
console.log(pathShell.history(mode));
//=>{"0":node index.js}

//get npm terminal history
const mode= 'array'
console.log(pathShell.npmHistory());
//=>['const user = require('express')();']

//get file contents of any file in $PATH
console.log(pathShell.anyFile('.pgAdmin4.startup.log'));
//<-----pg admin data-------->
```

Currently supports 

- Text (default)
- Array
- JSON

# Running tests

You can run tests by running `npm test`.
