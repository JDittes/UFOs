var drinks = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var layout = {
    title: "Bar Chart",
    xaxis: {title: "Drink Option"},
    yaxis: {title: "Persentage of drinks ordered"}
};

Plotly.newPlot("plotArea", [drinks], layout);

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

   //Scatter Chart
   var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };

  //Practice with map()
  var numbers = [0,2,4,6,8];

  var five = numbers.map(function(add) {
    return add + 5;
    });
  console.log(five)

  //More practice with map()
  var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(pop){
    return pop.population;
});
console.log(cityPop);

//Practice with Filtering
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var sstart = words.filter(function(hmm) {
    return "^s";
});
console.log(sstart);
//This didn't work, but I feel like I was really close.