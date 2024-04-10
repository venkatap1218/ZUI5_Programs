sap.ui.define([
			"sap/ui/core/mvc/Controller",
			"sap/ui/core/Fragment",
			"sap/ui/model/json/JSONModel"
		], function(Controller, Fragment, JSONModel) {
			"use strict";

			return Controller.extend("com.customZUI5P12-Custom.controller.View1", {
					onInit: function() {
						var oModel = new JSONModel({
							employees: [{
								EmployeeID: "001",
								EmployeeName: "RAM",
								Department: "HR"
							}, {
								EmployeeID: "002",
								EmployeeName: "Hari",
								Department: "IT"
							}, {
								EmployeeID: "003",
								EmployeeName: "Akhil",
								Department: "Finance"
							}, {
								EmployeeID: "004",
								EmployeeName: "Arjun",
								Department: "Marketing"
							}, {
								EmployeeID: "005",
								EmployeeName: "Harika",
								Department: "Sales"
							}]
						});

						this.getView().setModel(oModel);
						
						
						
						// initialization code
					},

					onLoginTap: function(oEvent) {
						// Get the pressed IconTabFilter

						// Create and open the fragment
						if (!this._oFragment) {
							this._oFragment = sap.ui.xmlfragment("com.customZUI5P12-Custom.Fragment.Frag", this);
							this.getView().addDependent(this._oFragment);
						}

						// Bind data or perform any additional logic in the fragment if needed

						// Open the fragment
						this._oFragment.open();
					},
					onCloseDialog: function() {
						if (this._oFragment) {
							this._oFragment.close();
						}
					}

					});
			});