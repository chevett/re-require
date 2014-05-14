re-require [![Build Status](https://travis-ci.org/chevett/re-require.png)](https://travis-ci.org/chevett/re-require)
=========

find some require statements and maybe change them if you feel like it


```js
var rerequire = require('re-require');
var fs = require('fs');
var strOldCode = fs.readFileSync('./your-killer-module.js', 'utf-8');

var strNewCode = rerequire(strOldCode, function(){
  // this.value is the esprima node for a require call.
  // you can change it by overwriting or modifying this.value
  console.dir(this.value);
});
```
