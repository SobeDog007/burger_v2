// Steven Sober
// 10/03/2017
// Homework: Burger_v2
// orm.js

// Dependencies:
var connection = require("./connection.js");

// Object Relational Mapper (ORM):

var orm = {

	// SELECT * from burgers;
	selectAll: function(tableName) {
    	var queryString = "SELECT * FROM ??;";
    	connection.query(queryString, [tableName], function(err, result) {
      	console.log(result);
    	});
  	},

	// INSERT INTO burgers (burger_name, devoured) VALUES ("Big Mac", false);
  	insertOne: function(tableName, burger_name, devoured) {
    	var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES ('??', '??'');";
    	console.log(queryString);
    	connection.query(queryString, [tableName, burger_name, devoured], function(err, result) {
      	console.log(result);
    	});
  	},

  	// UPDATE burgers SET devoured = true WHERE id = ??;
  	updateOne: function(tableName, devoured, burgerID) {
    	var queryString = "UPDATE ?? SET devoured = ?? WHERE id = ??;";
    	connection.query(queryString, [tableName, devoured, burgerID], function(err, result) {
      	console.log(result);
    	});
  	}
};

module.exports = orm;
