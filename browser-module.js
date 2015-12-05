window.module = function(ns, cb) {
  var namespaces = ns.split('.');
  var current = window;

  namespaces.forEach(function(namespace) {
    current[namespace] = current[namespace] || {};
    current = current[namespace];
  });

  if(cb) { cb(current); }
};
