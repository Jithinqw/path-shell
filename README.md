# path-shell

Nodejs wrapper around files existing on $PATH.

[![Build Status](https://travis-ci.com/Jithinqw/path-shell)
https://travis-ci.com/Jithinqw/path-shell.svg?branch=master)]

# Installation

Install using `npm i path-shell --save`.

# Usage

```javascript
const pathShell = require('path-shell');

//get history
console.log(pathShell.history());
//=>node index.js

//get npm terminal history
console.log(pathShell.npmHistory());
//=>const user = require('express')();

//get file contents of any file in $PATH
console.log(pathShell.anyFile('.pgAdmin4.startup.log'));
//<-----pag admin data-------->
```

# Running tests

You can run tests by running `npm test`.