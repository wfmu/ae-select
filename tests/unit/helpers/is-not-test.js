import { isNot } from '../../../helpers/is-not';
import { module, test } from 'qunit';

module('Unit | Helper | is not');

// Replace this with your real tests.
test('it returns true a value is falsy', function(assert) {
  assert.ok(isNot([null]));
  assert.ok(isNot([undefined]));
});

test('it returns false when a value is truthy', function(assert) {
  assert.equal(isNot([42]), false);
  assert.equal(isNot(['3:15']), false);
  assert.equal(isNot([{}]), false);
  assert.equal(isNot([new Date()]), false);
});
