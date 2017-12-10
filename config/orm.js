var connection = require("./connection.js");

var orm = {
	all: function(tableInput, cb){
		connection.query('SELECT * FROM ' +tableInput+';', function(err, result){
			if(err) throw err;
			cb(result)
		} )
	},
	update: function(table, condition, cb){
		connection.query('update ' +TableInput+' SET devoured=true where id=' +condition+';', function(err,result){
			if(err)throw err;
			cb(result);
		})
	}
}
module.export = orm;