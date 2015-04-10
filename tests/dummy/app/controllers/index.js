import Ember from 'ember';

export default Ember.Controller.extend({
  init: function () {
    this._super.apply(this, arguments);

    this.set('text', [
      {
        text: "I'm sorry, Dave...",
        typeSpeed: 20,
        pauseDelay: 500,
        deleteSpeed: 20
      },
      "I'm afraid I can't do that."
    ]);
  }
});
