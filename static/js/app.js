// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object. Curly brackets are the objects
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    var item = d3.select(this);
    //Look for result of listening select
    // Object.entries(filter).forEach(([key,value]) => {
    //   filteredData = filteredData.filter(row => row[key] === value)  
    // d3.selectAll("input").on("change", updateFilters);
    //3/5 selects all boxes labeled input. On a change to the box, it runs the function

    // 4b. Save the value that was changed as a variable.
    var values = item.property("value");

    // 4c. Save the id of the filter that was changed as a variable.
    var filterId = item.attr("id");
    console.log(filterId);  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    // See 11-1-3 Index.js
    if (values) {
      filters[filterId] = values;
    }
    else {
      delete filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  };

  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    var filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key,value]) => {
      filteredData = filteredData.filter(row => row[key] === value)}); 
    // if (date) {
    //   filteredData = filteredData.filter(row => row.datetime === date);
    // };
    // if (city) {
    //   filteredData = filteredData.filter(row => row.city === city);
    // };
    // if (state) {
    //   filteredData = filteredData.filter(row => row.state === state);
    // };
    // if (country) {
    //   filteredData = filteredData.filter(row => row.country === country);
    // };
    // if (shape) {
    //   filteredData = filteredData.filter(row => row.shape === shape);
    // };
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  };
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
