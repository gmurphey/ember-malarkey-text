module.exports = {
  description: 'Add ember-malarkey-text bower dependencies to app.',

  afterInstall: function () {
    return this.addBowerPackagesToProject([
      { name: 'yuanqing/malarkey' }
    ]);
  }
};
