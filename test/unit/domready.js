(function(){

module( 'DOMReady' );

test( 'Required globals and functions', function() {
	expect(3);
	ok( DOMReady, 'DOMReady' );
	ok( DOMReady.setOnError, 'DOMReady.setOnError' );
	ok( DOMReady.add, 'DOMReady.add' );
});

test( 'Check order function calls on DOM ready', function() {
	expect(5);
	equal( order[0], '1 - before DOMready' );
	equal( order[1], '2 - first DOMready function' );
	equal( order[2], '3 - second DOMready function' );
	equal( order[3], '4 - last DOMready function' );
	equal( order[4], '5 - after DOMready' );
});

test( 'Check error handler', function() {
	expect(1);
	equal( errMsg, 'Error 1' );
});

test( 'Pass arguments to callbacks', function() {
	var undef;
	errMsg = null; // reset error message

	expect(4);
	deepEqual( args[0], [param1, undef] );
	deepEqual( args[1], [param1, DOMReady, 'someString'] );
	deepEqual( args[2], [] );
	equal( errMsg, null );
});

test( 'Call error handler', function() {
	errMsg = null; // reset error message

	expect(2);
	equal( errMsg, null );

	DOMReady.add(function(){
		throw 'Error';
	});

	equal( errMsg, 'Error 1' );
});


/**
 * Run this code to for testing DOMReady
 */
var errMsg = null,
	order = [],
	args = [],
	param1 = 'testParam';

DOMReady.setOnError(function ( err ) {
	errMsg = 'Error 1';
});

// add a function
DOMReady.add(function ( p1, p2 ){
	args[0] = [p1, p2];
	order[order.length] = '2 - first DOMready function';
}, [param1]);

// add code as a string
DOMReady.add(function (){
	args[1] = [].slice.call( arguments, 0 );
	order[order.length] = '3 - second DOMready function';
}, [param1, DOMReady, 'someString']);

// add another function
DOMReady.add(function (){
	args[2] = [].slice.call( arguments, 0 );
	order[order.length] = '4 - last DOMready function';

	// calls function directly when DOM is already ready
	DOMReady.add(function(){
		order[order.length] = '5 - after DOMready';
	});
});

// add function causing error
DOMReady.add(function(){
	DOMReady.test.id.hhhhhh;
});

// this message should be shown first
order[order.length] = '1 - before DOMready';

})();