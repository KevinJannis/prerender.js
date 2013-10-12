prerender.js
============

prerender.js is a javascript plugin which uses the new prerender technique to tell the browser which pages it should load to improve page transition speed.

You can use this plugin with or without jQuery.

##General setup
Copy the `prerender.js` from the `lib` folder to your web directory. And insert the following to load it.

    <script src="../lib/prerender.js"></script>

###Plain javascript
In case you have not included jQuery in your website, or just don't want to use it for this plugin, then include the following at the bottom of the page. (Or include it in some sort of document ready callback)

    <script>
      var opts = {
        selector: ['a', '.prerendered']
      };
      new PreRender(opts);
    </script>

###jQuery
If you have jQuery included, then use the following code to set the plugin to work mode!

    <script>
      var opts = {
        selector: ['a', '.prerendered']
      };

      $(function() {
        $.prerender(opts);
      });
    </script>

##Options
Currently there is only one parameter you can customize: selector.
This parameter should be a string or and array of the different elements you would like to preload.
Please note that the element should have a `href` attribute for the plugin to work.

    <ul>
      <li><a href="sub/page-1.html">Page 1</a></li>
      <li><a href="sub/page-2.html">Page 2</a></li>
      <p class="prerendered" href="sub/page-2.html" onClick="window.location.href='sub/page-2.html';">This is a paragraph with a href attribute.</p>
    </ul>

In order to select these tags, use the following (avoid attribute selectors, since they impact performance)

    <script>
      var opts = {
        selector: ['a', '.prerendered']
      };
    </script>
or

    <script>
      var opts = {
        selector: 'a, .prerendered'
      };
    </script>