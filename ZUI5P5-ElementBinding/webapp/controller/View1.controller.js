sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.elebindingZUI5ElementBindingp5.controller.View1", {
		onInit: function() {
			// Declare data in the controller
			var oData = {
				firstName: "Ramesh",
				lastName: "Babu",
				age: 30,
				hobbies: ["Reading", "Swimming", "Gardening"],
				addresses: [{
					street: "123 Main St",
					city: "Cityville",
					zip: "12345"
				}, {
					street: "456 Park Ave",
					city: "Townsville",
					zip: "67890"
				}]
			};

			// Create a JSON model and set it as the view model
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);

			// Bind the view controls to the data
			this.getView().bindElement("/");
		}

	});
});