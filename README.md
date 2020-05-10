# path-shell

Nodejs wrapper around files existing on $PATH.

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
