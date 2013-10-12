prerender.js
============

Javascript plugin which automatically tells the browser which pages/links to prerender to optimize and speed up page transitions.

Currently you can use this plugin with jQuery or just plain old javascript.

##Plain javascript
Insert the following at the bottom of the page.
```html
<script src="../lib/prerender.js"></script>
<script>
  var opts = {
    selector: ['a', '.prerendered']
  };
  new PreRender(opts);
</script>
```

##jQuery
Insert the following at the bottom of the page.
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="../lib/prerender.js"></script>
<script>
  var opts = {
    selector: ['a', '.prerendered']
  };

  $(function() {
    $.prerender(opts);
  });
</script>
```