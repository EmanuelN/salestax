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
  //Do I already have an object with its name in salesTax?
  //If not, create it
  //add this information to it: total sales in that province and taxes
  //go to next entry in salesData
  //if object already exists with its name, just calculate and add
  for (var i = 0; i < salesData.length; i++){
    if (!(salesData[i].name in salesTax)){
      salesTax[salesData[i].name] = {}
      console.log(salesTax)
    }

  }
  //output
  //return the object of objects
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
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