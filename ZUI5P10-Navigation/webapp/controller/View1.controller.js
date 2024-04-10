sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.navZUI5P10-Navigation.controller.View1", {
		onInit: function() {
			// Controller initialization code
		},

	// Event handler for the button press that navigates to View2
		onGoToDetailPress: function() {
			// Get the router instance for the current UI component
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// Navigate to the "view2" route
			loRouter.navTo("View2");
		}

	});
});