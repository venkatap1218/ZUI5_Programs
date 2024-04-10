sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/navZUI5P10-Navigation/model/models",
	"sap/ui/core/routing/Router"
], function(UIComponent, Device, models, Router) {
	"use strict";

	return UIComponent.extend("com.navZUI5P10-Navigation.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			// Initialize the router to set up navigation and route handling
			this.getRouter().initialize();
		}
	});
});