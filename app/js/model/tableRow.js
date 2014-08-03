define(['backbone', function (Backbone) {

    var TableViewRowModel = Backbone.Model.extend({
        initialize: function () {
          console.log(this);
        }
    });

    return TableViewRowModel;
}]);