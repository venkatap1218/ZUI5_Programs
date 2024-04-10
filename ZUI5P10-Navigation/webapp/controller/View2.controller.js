sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.navZUI5P10-Navigation.controller.View2", {
		onInit: function() {
			// Controller initialization code
		},
		// Event handler for navigating back to View1
		onNavBack: function() {
			// Get the router associated with the UIComponent
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// Navigate to the "view1" route
			loRouter.navTo("View1");
		}
	});
});