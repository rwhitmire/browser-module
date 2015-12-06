/*!
 * browser-module v1.0.0
 * https://github.com/rwhitmire/browser-module
 *
 * Copyright 2015 Ryan Whitmire
 * Released under the MIT license
 */

window.module = function(ns, cb) {
  var namespaces = ns.split('.');
  var current = window;

  namespaces.forEach(function(namespace) {
    current[namespace] = current[namespace] || {};
    current = current[namespace];
  });

  if(cb) { cb(current); }
};
