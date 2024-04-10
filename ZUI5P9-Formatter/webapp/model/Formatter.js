sap.ui.define([], function() {
	"use strict";

	return {
		// Function to determine car type based on engine CC
		determineCarType: function(engineCC) {
			// Your logic to determine car type based on engine CC
			// If engine CC is less than 3000, consider it a "Family Car," otherwise a "Sports Car"
			return engineCC < 3000 ? "Family Car" : "Sports Car";
		},

		// Function to determine affordability based on price
		determineAffordability: function(price) {
			// Adjusted logic to determine affordability based on price only
			if (price < 100000) {
				// If price is less than 100,000, consider it "Very Affordable"
				return "Very Affordable";
			} else if (price >= 100000 && price < 200000) {
				// If price is between 100,000 and 200,000, consider it "Affordable"
				return "Affordable";
			} else {
				// If price is 200,000 or more, consider it "Expensive"
				return "Expensive";
			}
		}
	};
});