import Ember from 'ember';

export default Ember.Controller.extend({
  init: function () {
    this._super.apply(this, arguments);

    this.set('text', [
      "I'm sorry, Dave...",
      "I'm afraid I can't do that."
    ]);
  }
});
