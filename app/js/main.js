/**
 * How you dev, how you build.
 * @author: Mauro Mandracchia
 * @desc A shared RequireJS configuration. With good style and rules on dependency maintainability.
 *
 */
require.config({

    baseUrl: "app/js/",

    urlArgs: "bust=" +  (new Date()).getTime(), // This is for don't cache files during the requireJS structure.

    paths: {

        // Third Parties Dependencies
        "jquery": "vendor/jquery/dist/jquery.min",

        "underscore": "vendor/underscore/underscore",
        "backbone": "vendor/backbone/backbone",

        // Ractive related
        "ractive": "vendor/ractive/ractive",
        "ractive-backbone": "vendor/ractive-backbone/ractive-adaptors-backbone.min",
        "ractive-adapter": "vendor_ext/ractive-adapter",

        "amd-loader": 'vendor/requirejs-ractive/amd-loader',
        "rv": 'vendor/requirejs-ractive/rv',
        "rvc": 'vendor/requirejs-ractive/rvc',


        "moment": "vendor/moment/moment",
        "bootstrap": "vendor/bootstrap/dist/js/bootstrap.min",
        "selectize": "vendor/selectize/dist/js/standalone/selectize.min",
        "datepicker": "vendor/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min",
        "multiselect": "vendor/bootstrap-multiselect/js/bootstrap-multiselect",
        "text": 'vendor/requirejs-plugins/lib/text'

    },

    shim: {
        'ractive': {
            exports: 'Ractive'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: "Backbone"
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'datepicker': {
            deps: ['jquery', 'moment', 'bootstrap']
        },
        'multiselect': {
            deps: ['jquery', 'bootstrap']
        },
        'selectize': {
            deps: ['jquery']
        }
    }
});