prerender.js
============

prerender.js is a javascript plugin which uses the new prerender technique to tell the browser which pages it should load to improve page transition speed.

You can use this plugin with or without jQuery.

##Documentation

[https://developers.google.com/chrome/whitepapers/prerender](https://developers.google.com/chrome/whitepapers/prerender)

[http://msdn.microsoft.com/en-us/library/ie/dn265039(v=vs.85).aspx](http://msdn.microsoft.com/en-us/library/ie/dn265039(v=vs.85\).aspx)

##General setup
Copy the `prerender.js` from the `lib` folder to your web directory. And insert the following to load it.

    <script src="../lib/prerender.js"></script>

###Plain javascript
In case you have not included jQuery in your website, or just don't want to use it for this plugin, then include the following at the bottom of the page. (Or include it in some sort of document ready callback)

    <script>
      var opts = {
        selector: ['#menu'],
        attributes: ['href', 'data-href']
      };
      new PreRender(opts);
    </script>

###jQuery
If you have jQuery included, then use the following code to set the plugin to work mode!

    <script>
      var opts = {
        selector: ['#menu'],
        attributes: ['href', 'data-href']
      };

      $(function() {
        $.prerender(opts);
      });
    </script>

##Options
####selector, default = `['body']`

With option you can listen on different elements in the DOM. `prerender.js` will watch the children of these elements and prerender them when a user hovers over the child.

####attributes, default = `['href']`

Use this option to specify which attributes can hold the url to prerender. In some cases it is not possible to use the `href` attribute, in such situations you can specify other attributes which can contain the url, see examples below.

You only need to setup the script once and newly added childs in these containers will be automatically picked up and watched.

    <ul id="menu">
      <li><a href="sub/page-1.html">Page 1</a></li>
      <li><a href="sub/page-2.html">Page 2</a></li>
    </ul>
    <div id="container">
      <p class="prerendered" data-href="sub/page-2.html" onClick="window.location.href='sub/page-2.html';">This is a paragraph with a href attribute.</p>
    </div>

In order to prerender this example, use the following (avoid attribute selectors, since they impact performance)

    <script>
      var opts = {
        selector: ['#menu', '#container'], // Or: '#menu, #container'
        attributes: ['href', 'data-href']
      };
    </script>

Now whenever you add new elements with a `href` or `data-href` attribute, to `#menu` or `#container`, they will automatically be prerendered.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/KevinJannis/prerender.js/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

