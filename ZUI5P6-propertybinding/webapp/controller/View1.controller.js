sap.ui.define([
	"sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.propbindingZUI5propertybindingp6.controller.View1", {
		onInit: function() {
			// Declare data in the controller
			var aData = [{
				id: 1,
				name: "Item 1"
			}, {
				id: 2,
				name: "Item 2"
			}, {
				id: 3,
				name: "Item 3"
			}];

			// Create a JSON model and set the data
			var oModel = new JSONModel(aData);
			this.getView().setModel(oModel, "myModel");
		}

	});
});