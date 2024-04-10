sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.formZUI5registrationformp3.controller.View1", {
		onInit: function() {
			// Initialization code goes here
		},

		onLoginTap: function() {
			// Handle login button press
			var userId = this.getView().byId("uid").getValue();
			var password = this.getView().byId("pasw").getValue();

			// Example login logic
			if (userId === "admin" && password === "admin123") {
				MessageBox.success("Login successful!");
			} else {
				MessageBox.error("Invalid credentials. Please try again.");
			}
		}

	});
});