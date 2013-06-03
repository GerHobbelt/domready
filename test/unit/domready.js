(function () {

module('Ready');

test('Should have the these globals and functions', function () {
    expect(4);
    ok(Ready, 'Ready exists');
    ok(Ready.on, 'Ready.on exists');
    ok(Ready.params, 'Ready.params exists');
    ok(Ready.error, 'Ready.error exists');
});

test('Should provide chainable methods', function () {
    expect(4);
    strictEqual(returnReady, Ready, 'Ready is chainable');
    strictEqual(returnOn, Ready, 'Ready.on is chainable');
    strictEqual(returnParams, Ready, 'Ready.params is chainable');
    strictEqual(returnError, Ready, 'Ready.error is chainable');
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
    var params = ['testParam', Ready, 'someString'];

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

    Ready.on(function () {
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
var params = ['testParam', Ready, 'someString'];

// set error callback
var returnError = Ready.error(function (err) {
    errMsg = 'Error 1';
    errObj = err;
});

// set params
var returnParams = Ready.params(params);

// add a function
var returnReady = Ready(function (p1, p2) {
    args[0] = arguments;
    order[order.length] = '2 - first Ready function';
});

// add code as a string
var returnOn = Ready.on(function () {
    args[1] = arguments;
    order[order.length] = '3 - second Ready function';
});

// add another function
Ready.on(function () {
    args[2] = arguments;
    order[order.length] = '4 - last Ready function';

    // calls function directly when DOM is already ready
    Ready.on(function () {
        args[4] = arguments;
        order[order.length] = '5 - after Ready';
    });
});

// add function causing error
Ready.on(function () {
    args[3] = arguments;
    Ready.test.id.hhhhhh;
});

// this message should be shown first
order[order.length] = '1 - before Ready';

})();