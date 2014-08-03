/*
 * Author: Mauro Mandracchia - info@ideabile.com
 * All Right Reserved - 2014
 * Table content example
 */
define([ "jquery", "backbone", "underscore", "view/table", "collection/table" ],
    function ($, Backbone, _, TableView, TableCollection) {
        "use strict";

        var Table, ractive, TheadRows, Rows;

        Table = {};

        // Initial start of the Single Page Application
        Table.init = function (elem, opts, data) {
            var thead_rows, rows;

            // Add data to the Rows collection
            rows = new TableCollection(data);

            ractive = new TableView({
                el: elem,
                data: {
                    rows: rows,
                    log: function(model){
                        console.log("model:\n\n",model);
                    }
                },
                adapt: [ 'Backbone' ]
            });


            ractive.on({

                typeChange: function (elem, attr, value) {

                    var model = filters.get(elem);
                    if (typeof model != "undefined") {
                        model.set(attr, value);
                    }

                },

                removeFilter: function (elem, id) {

                    var model = filters.get(id);
                    filters.remove(model);

                }
            });

            $(".e-add").on("click", function () {
                filters.add({});
            });


        };

        return Table;
    });