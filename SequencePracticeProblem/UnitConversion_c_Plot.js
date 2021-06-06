//sqft to acre given question based 60*40=2400 *25=60000
// 1 sq_metre = 0.0002471 acre,......1sqft=0.0929 sqmetre

const one_sqmt_plot = 222.96;
const conversionMultiplier = 0.00024711;
var no_of_plot = 25;

console.log("Area of 25 plots in acre : " + (one_sqmt_plot * conversionMultiplier * no_of_plot).toFixed(2));
