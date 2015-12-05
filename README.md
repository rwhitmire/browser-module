# browser-module
javascript modules for the browser

``` javascript
module('App.MyModule', function(MyModule){
  MyModule.message = 'hello world';
});

console.log(window.App.MyModule.message);
```
