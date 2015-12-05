# browser-module
javascript modules for the browser

[download](https://github.com/rwhitmire/browser-module.git)

``` javascript
module('App.MyModule', function(MyModule){
  MyModule.message = 'hello world';
});

console.log(window.App.MyModule.message);
```
