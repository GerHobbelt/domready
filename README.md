[DOMReady](http://www.freelancephp.net/domready-javascript-object-cross-browser/) - JavaScript Object
=====================================================================================================

DOMReady is a JavaScript object with cross browser support for calling functions immediatly when the DOM is ready.


How To Use?
-----------

### Add functions ###

Add functions to execute when the DOM is loaded:

`DOMReady.add(function (){
    alert( 'DOM is ready!' );
});`

Or pass arguments to the callback function:

`var param1 = 'hello',
	param2 = 1234;

DOMReady.add(
	function ( arg1, arg2 ){
		// arg1 = 'hello' and arg2 = 1234
	},
	[ param1, param2 ]
);`

### Error callback ###

Set an error callback:

`DOMReady.setOnError(function ( err ){
    alert( err );
});`


API
---

* DOMReady.add( fn, [ args ] )
* DOMReady.setOnError( fn )


License
-------

Released under MIT license.


Credits
-------

* [IEContentLoaded](http://javascript.nwbox.com/IEContentLoaded/) of Diego Perini
* [IEContentLoaded: Yet another DOMContentLoaded](http://ajaxian.com/archives/iecontentloaded-yet-another-domcontentloaded) of Dion Almaer


Questions?
----------

If you have any question, please ask them using [this contactform](http://www.freelancephp.net/contact).
