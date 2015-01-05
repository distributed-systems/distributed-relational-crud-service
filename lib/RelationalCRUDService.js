!function() {

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
        , CRUDService   = require('distributed-crud-service');



	module.exports = new Class({
        inherits: CRUDService



		, init: function init(options) {

            // super needs to set up the service
            init.super.call(this, options);
		}
	});
}();
