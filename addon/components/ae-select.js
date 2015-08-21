import Ember from 'ember';
import layout from '../templates/components/ae-select';

// Replacement for {{view "select"}} based on http://emberjs.jsbin.com/fotuqa
/* Usage:
   {{ae-select
    content=unitedStates
    selection=selectedState
    action=(action (mut selectedState))
    optionValuePath="id"
    optionLabelPath="text"
    required=true
    name=name
  }}
*/
export default Ember.Component.extend({
  layout: layout,
    // possible passed-in values with their defaults:
  tagName: 'span',
  content: [],
  prompt: null,
  optionValuePath: 'id',
  optionLabelPath: 'title',
  action: Ember.K, // action to fire on change

  // shadow the passed-in `selection` to avoid
  // leaking changes to it via a 2-way binding
  _selection: Ember.computed.reads('selection'),

  init: function() {
    this._super.apply(this, arguments);
    if (!this.get('content')) {
      this.set('content', []);
    }
  },

  actions: {
    change: function() {
      const selectEl = this.$('select')[0];
      const selectedIndex = selectEl.selectedIndex;
      const content = this.get('content');

      // decrement index by 1 if we have a prompt
      const hasPrompt = !!this.get('prompt');
      const contentIndex = hasPrompt ? selectedIndex - 1 : selectedIndex;

      const selection = content[contentIndex];

      // set the local, shadowed selection to avoid leaking
      // changes to `selection` out via 2-way binding
      this.set('_selection', selection);

      const changeCallback = this.get('action');
      changeCallback(selection);
    }
  }
});
