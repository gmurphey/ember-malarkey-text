# ember-malarkey-text

An Ember component wrapping the [Malarkey](https://github.com/yuanqing/malarkey) project, which gives a DOM element a typewriter/ticker effect.

This [Ember CLI](http://www.ember-cli.com/) addon adds a `malarkey-text` component to your Ember project.

## Installation

    ember install ember-malarkey-text

## Usage

In your controller, set up an array of strings:

    import Ember from 'ember';

    export default Ember.Controller.extend({
      init: function () {
        this._super.apply(this, arguments);

        this.set('text', [
          "I'm sorry, Dave...",
          "I'm afraid I can't do that."
        ];
      }
    });

And in that controller's template:

    {{malarkey-text text=text loop=true}}

And that's it! To see all the available, please see that [Malarkey's documentation](https://github.com/yuanqing/malarkey/blob/master/README.md#api).

## Contributing

Pull requests are welcome!

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
