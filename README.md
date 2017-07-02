# ember-malarkey-text

[![Greenkeeper badge](https://badges.greenkeeper.io/gmurphey/ember-malarkey-text.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/gmurphey/ember-malarkey-text.svg?branch=master)](https://travis-ci.org/gmurphey/ember-malarkey-text)

An Ember component wrapping the [Malarkey](https://github.com/yuanqing/malarkey) project, which gives a DOM element a typewriter/ticker effect.

This [Ember CLI](http://www.ember-cli.com/) addon adds a `malarkey-text` component to your Ember project.

## Installation

    ember install ember-malarkey-text

## Basic Usage

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

By default, if the `loop` property is `false`, the last item of text in your `text` array will remain after the steps are finished. If you'd like it delete itself, simply pass `deleteLast=true` to the component.

And that's it! To see all the available options, please see [Malarkey's documentation](https://github.com/yuanqing/malarkey/blob/master/README.md#api).

## Advanced Usage

It's possible to pass step-specific options to the component, like so:

    import Ember from 'ember';

    export default Ember.Controller.extend({
      init: function () {
        this._super.apply(this, arguments);

        this.set('text', [
          {
            text: "I'm sorry, Dave...",
            typeSpeed: 1000,
            pauseDelay: 2500,
            deleteSpeed: 1000
          },
          "I'm afraid I can't do that."
        ];
      }
    });

In your `text` property, you can mix option-filled objects, and simple strings. When an option isn't declared, the component default will be used.

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
