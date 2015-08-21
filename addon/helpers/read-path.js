import Ember from 'ember';

export function readPath([object, path]) {
  if (typeof object === 'object' && path) {
    return Ember.get(object, path);
  }
  return object;
}

export default Ember.Helper.helper(readPath);
