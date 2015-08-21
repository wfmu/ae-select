import { readPath } from '../../../helpers/read-path';
import { module, test } from 'qunit';

module('Unit | Helper | read path');

// Replace this with your real tests.
test('it reads paths', function(assert) {
  assert.equal(readPath([{name: 'Weyland-Yutani'}, 'name']), 'Weyland-Yutani');
});
