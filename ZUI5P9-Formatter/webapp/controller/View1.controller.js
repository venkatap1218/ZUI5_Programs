sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/formatterZUI5P9-Formatter/model/Formatter"
], function(Controller, Formatters) {
	"use strict";

	return Controller.extend("com.formatterZUI5P9-Formatter.controller.View1", {
		onInit: function() {
			// Declare car data within the controller
			var aCars = [{
					name: "Toyota Camry",
					engineCC: 2500,
					price: 30000
				}, {
					name: "Honda Accord",
					engineCC: 2200,
					price: 28000
				}, {
					name: "Chevrolet Malibu",
					engineCC: 2300,
					price: 32000
				}, {
					name: "Ford Fusion",
					engineCC: 2000,
					price: 100000
				}, {
					name: "Lamborghini Aventador",
					engineCC: 6498,
					price: 100000
				}, {
					name: "Ferrari 488 Spider",
					engineCC: 3902,
					price: 300000
				}, {
					name: "Bugatti Chiron",
					engineCC: 7993,
					price: 300000000
				}, {
					name: "McLaren P1",
					engineCC: 3799,
					price: 1500000000
				}
				// Add more cars as needed
			];

			// Create a JSON model and set the data
			var oModel = new sap.ui.model.json.JSONModel({
				cars: aCars
			});
			this.getView().setModel(oModel);
		},

		// Use the formatters from the separate file
		determineCarType: Formatters.determineCarType,
		determineAffordability: Formatters.determineAffordability

	});
});