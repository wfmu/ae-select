import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ae-select', 'Integration | Component | ae select', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ae-select}}`);

  assert.equal(this.$().text().trim(), '');
});


test('it renders a prompt', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ae-select
    prompt='I am a prompt'
  }}`);

  assert.equal(this.$().text().trim(), 'I am a prompt');
});

test('it renders the content', function(assert) {
  assert.expect(1);

  this.set('content', [
    'option 1',
    'option 2',
    'option 3'
  ]);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ae-select
    content=content
  }}`);

  assert.equal(this.$('option').length, 3);
});


test('it renders triggers an action when an option is clicked', function(assert) {
  assert.expect(2);

  this.set('content', [
    'option 1',
    'option 2',
    'option 3'
  ]);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ae-select
    content=content
    action=(action (mut selectedValue))
  }}`);

  assert.equal(this.get('selectedValue'), undefined);

  this.$('select').trigger('change');

  assert.equal(this.get('selectedValue'), 'option 1');
});

test('updating the selection updates the selected option', function(assert) {
  assert.expect(2);

  this.set('content', [
    'option 1',
    'option 2',
    'option 3'
  ]);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ae-select
    content=content
    selection=selection
  }}`);

  assert.equal(this.$('option[selected]').text(), '');
  this.$('option').last().attr('selected', true);
  assert.equal(this.$('option[selected]').text().trim(), 'option 3');
});


test('required marks the select as required', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ae-select
    required=true
  }}`);

  assert.equal(this.$('select[required]').length, 1);
});


test('id sets the id on the select', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ae-select
    id='states'
  }}`);

  assert.equal(this.$('#states').length, 1);
});


test('name sets the name on the select', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ae-select
    name='states'
  }}`);

  assert.equal(this.$('select').attr('name'), 'states');
});


test('it renders the options as text if they are strings', function(assert) {
  assert.expect(1);

  this.set('content', [
    'option 1',
    'option 2',
    'option 3'
  ]);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ae-select
    content=content
  }}`);

  assert.equal(this.$('option').text().trim().replace(/\s+/g, ' '), 'option 1 option 2 option 3');
});


test('it renders the options using the optionLabelPath if they are objects', function(assert) {
  assert.expect(1);

  this.set('content', [
    {name: 'option 1'},
    {name: 'option 2'},
    {name: 'option 3'},
  ]);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ae-select
    content=content
    optionLabelPath='name'
  }}`);

  assert.equal(this.$('option').text().trim().replace(/\s+/g, ' '), 'option 1 option 2 option 3');
});
