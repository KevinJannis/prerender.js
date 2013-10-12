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
      selector: opts.selector || defaults.selector,
      linkId: 'prerender'
    };
  };

  PreRender.prototype.prerender = function(href) {
    this.remove();

    var link = document.createElement('link');
    link.setAttribute('id', this.linkId);
    link.setAttribute('rel', 'prerender');
    link.setAttribute('href', href);

    var head = document.getElementsByTagName('head')[0];
    if (head) {
      head.appendChild(link);
    }
  };

  PreRender.prototype.remove = function() {
    var link = document.findElementById(this.linkId);
    if (link && link.parentNode) {
      link.parentNode.removeChild(link);
    }
  };

  
})();