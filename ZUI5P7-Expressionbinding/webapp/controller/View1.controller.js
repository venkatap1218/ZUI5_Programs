sap.ui.define([
	"sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.expressionZUI5Expressionbindingp7.controller.View1", {
		onInit: function() {
			// Create a JSON model with product data
			var oProductModel = new JSONModel({
				product: {
					name: "SAPUI5 Book",
					price: 49.99,
					currency: "USD",
					discount: 0.1
				}
			});

			// Set the model to the view
			this.getView().setModel(oProductModel);
		}

	});
});