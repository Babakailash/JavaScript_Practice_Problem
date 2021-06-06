//Given in feet convert into metre
//1 m = 3.28,1ft=0.304m........Use toFixed() for round to 2 place of decimal

var length = 60;
var width = 40;
const conversionMultiplier = 0.0929;
var sqft_area_plot = length * width;
console.log("Rectangular Plot : " + (sqft_area_plot*conversionMultiplier).toFixed(2));
