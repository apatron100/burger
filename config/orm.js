var connection = require("./connection.js");

var orm = {
	all: function(tableInput, cb){
		connection.query('SELECT * FROM ' +tableInput+';', function(err, result){
			if(err) throw err;
			cb(result)
		})
	},
	update: function(tableInput, condition, cb){
		connection.query('update ' +TableInput+' SET devoured=true WHERE id=' +condition+';', function(err,result){
			if(err)throw err;
 		})
	},

		create: function(tableInput,val,cb){
			connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err,result){
					if(err)throw err;
					cb(result);
				})
		}
}


module.export = orm;