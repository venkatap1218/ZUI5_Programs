sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("com.popupZUI5Alertp2.controller.View1", {
		
			onInit: function() {

		},
		onPress: function() {
			MessageToast.show("This is the Ram Kumar!!!");
		}

	});
});