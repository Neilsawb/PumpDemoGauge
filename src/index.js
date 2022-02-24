import "@carbon/charts/styles.css";
import { GaugeChart } from "@carbon/charts";

const data = [
	{
		"group": "value",
		"value": 42
	},
	{
		"group": "delta",
		"value": -13.37
	}
];

const options = {
	"title": "Gauge semicircular -- danger status",
	"resizable": true,
	"height": "250px",
	"width": "100%",
	"gauge": {
		"type": "semi",
		"status": "danger"
	}
};

// Grab chart holder HTML element and initialize the chart
const chartHolder = document.getElementById("app");
new GaugeChart(chartHolder, {
	data,
	options
});
