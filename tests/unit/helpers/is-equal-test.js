import { isEqual } from '../../../helpers/is-equal';
import { module, test } from 'qunit';

module('Unit | Helper | is equal');

// Replace this with your real tests.
test('it returns true when things are equal', function(assert) {
  assert.ok(isEqual([42, 42]));
  assert.ok(isEqual(['3:15', '3:15']));
  var object = {};
  assert.ok(isEqual([object, object]));
  assert.ok(isEqual([null, null]));
  assert.ok(isEqual([undefined, undefined]));
  var date = new Date();
  assert.ok(isEqual([date, date]));
});


test('it returns false when things are not equal', function(assert) {
  assert.equal(isEqual(['3:15', 'some other string']), false);
  assert.equal(isEqual([42, 1]), false);
  assert.equal(isEqual([{}, {}]), false);
  assert.equal(isEqual([null, undefined]), false);
});
