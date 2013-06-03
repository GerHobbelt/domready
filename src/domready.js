/**
 * DOM Ready
 *
 * @fileOverview
 *    Cross browser object to attach functions that will be called
 *    immediatly when the DOM is ready.
 *    Released under MIT license.
 * @version 3.0.0
 * @author Victor Villaverde Laan
 * @link http://www.freelancephp.net/domready-javascript-object-cross-browser/
 * @link https://github.com/freelancephp/DOMReady
 */
/*globals window */
/*jslint vars: true */

var Ready = (function (window) {
    'use strict';

    var doc = window.document;
    var fns = [];
    var args = [];
    var isReady = false;
    var errorHandler = null;

    /**
     * Call a ready handler
     * @param {Function} fn
     */
    var call = function (fn) {
        try {
            // call function
            fn.apply(this, args);
        } catch (e) {
            // error occured while executing function
            if (errorHandler !== null) {
                errorHandler.call(this, e);
            }
        }
    };

    /**
     * Call all ready handlers
     */
    var run = function () {
        var x;

        isReady = true;

        // call all registered functions
        for (x = 0; x < fns.length; x = x + 1) {
            call(fns[x]);
        }

        // clear handlers
        fns = [];
    };

    /**
     * @static
     * @constructor
     * @param {Function} fn
     * @return {Api}
     */
    var Api = function (fn) {
        return Api.on(fn);
    };

    /**
     * Add code or function to execute when the DOM is ready
     * @param {Function} fn
     * @return {Api}
     */
    Api.on = function (fn) {
        // call imediately when DOM is already ready
        if (isReady) {
            call(fn);
        } else {
            // add to the list
            fns[fns.length] = fn;
        }

        return this;
    };

    /**
     * Set params that will be passed to every ready handler
     * @param {Array} params
     * @return {Api}
     */
    Api.params = function (params) {
        // set only when not yet ready
        if (isReady === false) {
            args = params;
        }

        return this;
    };

    /**
     * Set error callback
     * @param {Function} fn
     * @return {Api}
     */
    Api.error = function (fn) {
        // set only when not yet ready
        if (isReady === false) {
            errorHandler = fn;
        }

        return this;
    };

    // for all browsers except IE
    if (window.addEventListener) {
        doc.addEventListener('DOMContentLoaded', function () { run(); }, false);
    } else {
        // for IE
        // code taken from http://ajaxian.com/archives/iecontentloaded-yet-another-domcontentloaded
        var poll = function () {
            // check IE's proprietary DOM members
            if (!doc.uniqueID && window.document.expando) {
                return;
            }

            // you can create any tagName, even customTag like <document :ready />
            var tempNode = doc.createElement('document:ready');

            try {
                // see if it throws errors until after ondocumentready
                tempNode.doScroll('left');

                // call run
                run();
            } catch (e) {
                window.setTimeout(poll, 0);
            }
        };

        poll();
    }

    return Api;

})(window);