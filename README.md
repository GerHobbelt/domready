[domReady](http://www.freelancephp.net/domready-javascript-object-cross-browser/) - JavaScript Object
=====================================================================================================

domReady is a JavaScript object with cross browser support (IE6+) for calling functions immediatly when the DOM is ready.


How To Use?
-----------

### Ready handlers ###

Use the function `domReady()` or `domReady.on()` to add handlers to run when the DOM is ready. It's possible to add as many handlers as you want. The will be executed in the same order.

Example:

    domReady(function () {
        alert('DOM is ready!');
    });

    // is equal to
    domReady.on(function () {
        alert('DOM is ready!');
    });


### Pass arguments ###

Set arguments to pass on to all ready function handlers with the `domReady.params()` function.

Example:

    var param1 = 'hello';
    var param2 = 1234;

    domReady.params([param1, param2]);

    // params will be passed on to the handler
    domReady.on(function (arg1, arg2) {
        // arg1 = 'hello' and arg2 = 1234
    });

### Error callback ###

Set an error callback with the function `domReady.error()`. It's only possible to set one error callback.

Example:

    domReady.error(function (err) {
        alert(err);
    });


API
---
* `domReady( fn )` (equal to `domReady.on`)
* `domReady.on( fn )`
* `domReady.params( params )`
* `domReady.error( fn )`


Browser Support
---------------

Tested on IE6+, FF, Opera, Chrome and Safari (for Windows).


License
-------

Released under MIT license.


Credits
-------

* [IEContentLoaded](http://javascript.nwbox.com/IEContentLoaded/) of Diego Perini
* [IEContentLoaded: Yet another DOMContentLoaded](http://ajaxian.com/archives/iecontentloaded-yet-another-domcontentloaded) of Dion Almaer


Questions?
----------

If you have any questions, please ask them by using [this contactform](http://www.freelancephp.net/contact).
