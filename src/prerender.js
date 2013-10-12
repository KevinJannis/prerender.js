(function() {

  if (!document.querySelectorAll) {
    window.console && window.console.log('Prerender: Browser is not supported (no querySelectorAll)');
    return;
  }

  var defaults = {
    name: 'PreRender',
    selector: ['a']
  };


  // There is some customization included:
  // opts.selector: A String or an Array that includes selector(s) to select the DOM elements 
  //                for which prerender.js will add the prerender link to the DOM.
  //                These elements should have a href attribute that contains the link to prerender

  function PreRender(opts) {
    var _this = this;
    var options = this.options = {
      name: defaults.name,
      selector: opts && opts.selector || defaults.selector,
      linkId: defaults.name.toLowerCase()
    };

    console.log(options);

    if (Array.isArray && Array.isArray(options.selector)
       || options.selector instanceof Array) {
      options.selector = options.selector.join(', ');
    }

    var elements = document.querySelectorAll(options.selector);
    for (var i = 0; elements && i < elements.length; i++) {
      var el = elements[i];
      el.onmouseover = function() {
        var href = this.getAttribute('href');
        _this.prerender(href);
      }
    }
  };

  PreRender.prototype = {
    remove: function() {
      var link = document.getElementById(this.options.linkId);
      if (link && link.parentNode) {
        link.parentNode.removeChild(link);
      }
    },

    prerender: function(href) { console.log('yeah: ' + href);
      this.remove();

      if (href) {
        var link = document.createElement('link');
        link.setAttribute('id', this.options.linkId);
        link.setAttribute('rel', 'prerender');
        link.setAttribute('href', href);

        var head = document.getElementsByTagName('head')[0];
        if (head) {
          head.appendChild(link);
        }
      }
    }
  };

  if (window.jQuery || window.$) {
    window.jQuery[defaults.name] = PreRender;
  } else {
    window[defaults.name] = PreRender;
  }
})();