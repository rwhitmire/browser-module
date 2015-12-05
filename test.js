QUnit.module('module', {
  afterEach: function() {
    window.foo = undefined;
  }
});

QUnit.test("root module creation", function(assert) {
  module("foo");
  assert.ok(window.foo);
});

QUnit.test("nested module creation", function(assert) {
  module("foo.bar");
  assert.ok(window.foo);
  assert.ok(window.foo.bar);
});

QUnit.test("modules should not destroy existing modules", function(assert) {
  window.foo = { bar: { baz: true } };
  module("foo.bar");
  assert.ok(window.foo.bar.baz);
});

QUnit.test("module callback should return instance of module", function(assert) {
  module("foo", function(foo) {
    foo.bar = true;
  });

  assert.ok(window.foo.bar);
});
