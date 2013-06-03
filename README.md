[DOM Ready](http://www.freelancephp.net/domready-javascript-object-cross-browser/) - JavaScript Object
=====================================================================================================

DOM Ready is a JavaScript object with cross browser support (IE6+) for calling functions immediatly when the DOM is ready.


How To Use?
-----------

### Add functions ###

Add functions to execute when the DOM is loaded:

    Ready(function () {
        alert('DOM is ready!');
    });

### Set arguments ###

Pass arguments to all ready function handlers with:

    var param1 = 'hello';
    var param2 = 1234;

    Ready.params([param1, param2]);

    // params will be passed on to the handler
    Ready.on(function (arg1, arg2) {
        // arg1 = 'hello' and arg2 = 1234
    });

### Error callback ###

Set an error callback:

    Ready.error(function (err) {
        alert(err);
    });


API
---
* `Ready( fn )` (equal to `Ready.on`)
* `Ready.on( fn )`
* `Ready.params( params )`
* `Ready.error( fn )`



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
