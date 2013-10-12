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
        selector: ['#menu']
      };
      new PreRender(opts);
    </script>

###jQuery
If you have jQuery included, then use the following code to set the plugin to work mode!

    <script>
      var opts = {
        selector: ['#menu']
      };

      $(function() {
        $.prerender(opts);
      });
    </script>

##Options
Currently there is only one option you can customize: `selector`.

With the `selector` options you can listen on different elements in the DOM.
`prerender.js` will watch the children of these elements and prerender the url specified in the `href` attribute when a user hovers over the child.

You only need to setup the script once and newly added childs in these containers will be automatically picked up and watched.

    <ul id="menu">
      <li><a href="sub/page-1.html">Page 1</a></li>
      <li><a href="sub/page-2.html">Page 2</a></li>
    </ul>
    <div id="container">
      <p class="prerendered" href="sub/page-2.html" onClick="window.location.href='sub/page-2.html';">This is a paragraph with a href attribute.</p>
    </div>

In order to prerender this example, use the following (avoid attribute selectors, since they impact performance)

    <script>
      var opts = {
        selector: ['#menu', '#container']
      };
    </script>
or

    <script>
      var opts = {
        selector: '#menu, #container'
      };
    </script>

Now whenever you add new elements with a `href` attribute, to `#menu` or `#container`, they will automatically be prerendered.