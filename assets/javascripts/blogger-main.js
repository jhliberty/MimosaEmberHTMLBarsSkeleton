require(['common'], function() {
  require(['app', 'blogger/modules'], function(App, modules) {
    window.Blogger = App.createWithMixins(modules);
  });
});
