# Ae-select

Select component used by Audience Engine ember apps

### Usage
```hbs
   {{ae-select
    content=unitedStates
    selection=selectedState
    prompt="Select a state"
    action=(action (mut selectedState))
    optionValuePath="id"
    optionLabelPath="text"
    required=true
    name=name
  }}
```

```js
export default Ember.Controller.extend({
  selectedState: null,
  unitedStates: [{
      id: 1,
      text: "Alaska"
    },
    {
      id: 2,
      text: "Arizona"
    },
    {
      id: 3,
      text: "Arkansas"
    },
    {
      id: 4,
      text: "California"
    },
    {
      id: 5,
      text: "Colorado"
    },
    {
      id: 6,
      text: "Connecticut"
    },
    ...
  ]
})
```

This addon also supports working with arrays of strings as options.

```hbs
   {{ae-select
    content=unitedStates
    selection=selectedState
    prompt="Select a state"
    action=(action (mut selectedState))
    optionValuePath="id"
    optionLabelPath="text"
    required=true
    name=name
  }}
```

```js
export default Ember.Controller.extend({
  selectedState: null,
  unitedStates: [
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    ...
  ]
})
```


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
