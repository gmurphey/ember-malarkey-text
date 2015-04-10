/* globals malarkey */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['malarkey-text'],

  text: [],

  // private properties
  _options: {},

  setupMalarkey: Ember.on('didInsertElement', function () {
    var getOptions = function (keys) {
      var props = this.getProperties(keys);

      Object.keys(props).forEach(function (key) {
        if (typeof(props[key]) === 'undefined') {
          delete props[key];
        }
      });

      return props;
    };
    var deleteLast = (this.get('loop')) ? true : this.get('deleteLast') || false;
    var m;

    this.set('_options', getOptions.call(this, [
      'typeSpeed',
      'deleteSpeed',
      'pauseDelay',
      'loop',
      'postfix'
    ]));

    m = malarkey(this.get('element'), this.get('_options'));

    this.get('text').forEach(function (txt, index, arr) {
      m.type(txt.text || txt, txt.typeSpeed).pause(txt.pauseDelay);

      if (deleteLast || (index < (arr.length - 1))) {
        m.delete(txt.deleteSpeed);
      }
    });
  })
});
