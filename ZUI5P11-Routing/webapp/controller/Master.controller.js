sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("com.routeZUI5P11-Routing.controller.Master", {
		onInit: function() {

		},
		onView1: function() {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("route1", false);
		},
		onView2: function() {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("route2", false);
		}

	});
});