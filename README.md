# browser-module
javascript modules for the browser

[![Build Status](https://travis-ci.org/rwhitmire/browser-module.svg)](https://travis-ci.org/rwhitmire/browser-module)

[download](https://raw.githubusercontent.com/rwhitmire/browser-module/master/browser-module.js)

``` javascript
module('App.MyModule', function(MyModule){
  MyModule.message = 'hello world';
});

console.log(window.App.MyModule.message);
```
