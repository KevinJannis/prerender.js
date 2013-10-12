(function() {

  var defaults {
    name: 'prerender',
    timeout: 10,
    selector: 'a'
  };

  var PreRender = function(opts) {
    this.options = {
      name: defaults.name,
      timeout: opts.timeout || defaults.timeout,
      selector: opts.selector || defaults.selector
    };

    
  };

})();