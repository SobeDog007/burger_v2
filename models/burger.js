// Steven Sober
// 10/03/2017
// Homework: Burger_v2
// burger.js

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Burger object and ORM functions.
var burger = {
  	selectAll: function(tableInput, cb) {
    	orm.selectAll("burgers", function(res) {
      	cb(res);
    	});
  	},

  	createOne: function(tableInput, burger_name, devoured, cb) {
    	orm.createOne("burgers", burger_name, devoured, function(res) {
      	cb(res);
    	});
  	},

  	updateOne: function(tableInput, devoured, burgerID, cb) {
    	orm.updateOne("burgers", devoured, burgerID, function(res) {
      	cb(res);
    	});
  	}
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
