sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/m/MessageToast"
], function(Controller, Fragment, MessageToast) {
	"use strict";

	return Controller.extend("com.fragZUI5P8-Fragment.controller.View1", {
		onInit: function() {
			// Initialize the fragment
			this._oFragment = sap.ui.xmlfragment("com.fragZUI5P8-Fragment.Fragment.Intro", this);
		},

		onOpenFragment: function() {
			// Open the fragment
			
			this._oFragment.open();
		},

		onCloseFragment: function() {
			// Close the fragment
			this._oFragment.close();
		},

		onSayHello: function() {
			MessageToast.show("This is the Ram Kumar!!!");
		}

	});
});