define(function( require ){

    var _ = require("underscore"),
        bootstrap = window.bootstrap || {};

    bootstrap = {

        init: function( opts ){

            var _instances = _.each(opts, function(opt){

//               return require(["component/"+opt.component], function(_c){
//                   _c.init(opt.elem, opt.opts, opt.data);
//                   return _c;
//
//               });

               return require(["_components/"+opt.component+"/"+opt.component], function(_c){
                   _c.init(opt.elem, opt.opts, opt.data);
                   return _c;

               });

            });

        }
    };

    return bootstrap;

});