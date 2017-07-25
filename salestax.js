var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function calculateSalesTax(salesData, taxRates) {
  //background
  //create an empty object to store our results
  var salesTax = {}
  //execute
  //look at the first entry in the array salesData
  //add this information to it: total sales in that province and taxes
  //go to next entry in salesData
  //if object already exists with its name, just calculate and add
  for (var i = 0; i < salesData.length; i++){

    var provSales = salesData[i].sales.reduce(add, 0)
    var provTaxes = (provSales * taxRates[salesData[i].province])

    if (!(salesData[i].name in salesTax)){
      salesTax[salesData[i].name] = {
        ["totalSales"] : provSales,
        ["totalTaxes"] : provTaxes
      }
    }
    else {
      salesTax[salesData[i].name]["totalSales"] += provSales
      salesTax[salesData[i].name]["totalTaxes"] += provTaxes
    }
  }
  //output
  return salesTax
}
function add(a, b){
  return a + b
}
var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/