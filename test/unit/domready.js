(function () {

module('domReady');

test('Should have the these globals and functions', function () {
    expect(4);
    ok(domReady, 'domReady exists');
    ok(domReady.on, 'domReady.on exists');
    ok(domReady.params, 'domReady.params exists');
    ok(domReady.error, 'domReady.error exists');
});

test('Should provide chainable methods', function () {
    expect(4);
    strictEqual(returnReady, domReady, 'domReady is chainable');
    strictEqual(returnOn, domReady, 'domReady.on is chainable');
    strictEqual(returnParams, domReady, 'domReady.params is chainable');
    strictEqual(returnError, domReady, 'domReady.error is chainable');
});

test('Should call function handlers in the right order', function () {
    var output = [
        '1 - before Ready',
        '2 - first Ready function',
        '3 - second Ready function',
        '4 - last Ready function',
        '5 - after Ready'
    ];

    expect(2);
    deepEqual(order, output, 'Correct order');
    equal(errMsg, 'Error 1', 'Check if error was raised');
});

test('Should pass params to all ready function handlers', function () {
    errMsg = null; // reset error message
    var params = ['testParam', domReady, 'someString'];

    expect(6);
    deepEqual([].slice.call(args[0], 0), params);
    deepEqual([].slice.call(args[1], 0), params);
    deepEqual([].slice.call(args[2], 0), params);
    deepEqual([].slice.call(args[3], 0), params);
    deepEqual([].slice.call(args[4], 0), params);
    equal(errMsg, null);
});

test('Should call error callback on error', function () {
    errMsg = null; // reset error message
    errObj = null;

    expect(3);
    equal(errMsg, null);

    domReady.on(function () {
        throw 'Error';
    });

    equal(errMsg, 'Error 1', 'Error message set');
    ok(typeof errObj === 'string', 'Error object passed as argument');
});


/**
 * Run this code to for testing Ready
 */
var errMsg = null;
var errObj = null;
var order = [];
var args = [];
var params = ['testParam', domReady, 'someString'];

// set error callback
var returnError = domReady.error(function (err) {
    errMsg = 'Error 1';
    errObj = err;
});

// set params
var returnParams = domReady.params(params);

// add a function
var returnReady = domReady(function (p1, p2) {
    args[0] = arguments;
    order[order.length] = '2 - first Ready function';
});

// add code as a string
var returnOn = domReady.on(function () {
    args[1] = arguments;
    order[order.length] = '3 - second Ready function';
});

// add another function
domReady.on(function () {
    args[2] = arguments;
    order[order.length] = '4 - last Ready function';

    // calls function directly when DOM is already ready
    domReady.on(function () {
        args[4] = arguments;
        order[order.length] = '5 - after Ready';
    });
});

// add function causing error
domReady.on(function () {
    args[3] = arguments;
    domReady.test.id.hhhhhh;
});

// this message should be shown first
order[order.length] = '1 - before Ready';

})();