sap.ui.define([
	"sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";
	
	// This is a method provided by SAPUI5 to create a new controller by extending the base Controller class.

	return Controller.extend("com.aggregationbindingZUI5Aggregationbindingp4.controller.View1", {

		onInit: function() {
			// Creating a JSON model with some random employee data
			var oModel = new JSONModel({
				employees: [{
						EmployeeID: "001",
						EmployeeName: "Ramesh Babu",
						Department: "HR"
					}, {
						EmployeeID: "002",
						EmployeeName: "Bhanu Prakesh",
						Department: "IT"
					}, {
						EmployeeID: "003",
						EmployeeName: "Abbas",
						Department: "Finance"
					}, {
						EmployeeID: "004",
						EmployeeName: "Rajesh",
						Department: "Marketing"
					}, {
						EmployeeID: "005",
						EmployeeName: "Venu",
						Department: "Sales"
					}
				]
			});

			this.getView().setModel(oModel);
		}

	});
});