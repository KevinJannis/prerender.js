(function() {

  if (!document.querySelectorAll) {
    window.console && window.console.log('Prerender: Browser is not supported (no querySelectorAll)');
    return;
  }

  var defaults = {
    name: 'PreRender',
    selector: ['body'],
    attributes: ['href']
  };


  // There is some customization included:
  // opts.selector: A String or an Array that includes selector(s) for which prerender.js will attach.
  //                When prerender.js is attached to such an element it will listen for mousehovers on
  //                the children and append a prerender link if the child has one of the specified attributes.

  function PreRender(opts) {
    var _this = this;
    var options = this.options = {
      name: defaults.name,
      selector: opts && opts.selector || defaults.selector,
      attributes: opts && opts.attributes || defaults.attributes,
      linkId: defaults.name.toLowerCase()
    };

    // Make it an array if a string is passed
    if (Array.isArray && !Array.isArray(options.selector)
       || !(options.selector instanceof Array)) {
      options.selector = [options.selector];
    }

    // Make it an array if a string is passed
    if (Array.isArray && !Array.isArray(options.attributes)
       || !(options.attributes instanceof Array)) {
      options.attributes = [options.attributes];
    }

    var elements = document.querySelectorAll(options.selector.join(', '));

    for (var i = 0; elements && i < elements.length; i++) {
      elements[i].onmouseover = function(e) {
        var target = e.target || e.srcElement;

        for (var j = 0; options.attributes && j < options.attributes.length; j++) {
          var attr = options.attributes[j];
          var url = target.getAttribute(attr);

          if (url) {
            _this.prerender(url);
            break;
          }
        }
      };
    }
  };

  PreRender.prototype = {
    remove: function() {
      var link = document.getElementById(this.options.linkId);
      if (link && link.parentNode) {
        link.parentNode.removeChild(link);
      }
    },

    prerender: function(href) {
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

  window[defaults.name] = PreRender;

  if (window.jQuery) {
    window.jQuery[defaults.name.toLowerCase()] = function(opts) {
      new PreRender(opts);
    };
  } else if (window.$) {
    window.$[defaults.name.toLowerCase()] = function(opts) {
      new PreRender(opts);
    };
  }
})();