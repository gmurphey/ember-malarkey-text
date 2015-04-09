/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-malarkey-text',

  included: function (app) {
    this._super.included(app);

    app.import({
      development: app.bowerDirectory + '/malarkey/dist/malarkey.js',
      production: app.bowerDirectory + '/malarkey/dist/malarkey.min.js'
    });
  }
};
