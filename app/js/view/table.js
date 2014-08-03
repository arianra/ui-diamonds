/*
 * Author: Mauro Mandracchia - info@ideabile.com
 * All Right Reserved - 2014
 * Please contact the author before the usage of this code.
 */

/*
 * The Ractive view
 */
define(['ractive', 'jquery', "rv!template/table/index",
    "ractive-adapter"
],

    function (Ractive, $, tmpl_table) {

        var TableView = Ractive.extend({

            // ...but it should append to it rather than overwriting its contents
//            append: true,
//            magic: true,

            el: "something",
            template: tmpl_table

        });


        return TableView;
    });
