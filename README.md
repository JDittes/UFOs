# UFOs

## Overview of Project: 
I was hired to help Dana, a data journalist, set up a web site powered by JavaScript that would let users look up UFO sightings. Her hometown has an annual UFO festival, and she has long had an interest in UFO sightings both from her home town and around the world. To coincide with an article Dana plans to write about UFOs, she wants to set up a sight that will let her readers search for themselves, to find UFO sightings near them.

Dana has brought with her a JSON file of UFO sightings. I will use that as a database from which users can draw through an interactive filter on the web site Dana and I are building.

## Results: 
Dana had already written some copy for the home page. I separated the page into two columns: a sidebar that was 4 columns wide, and a wider column for content that was 8 columns wide. I put Dana's title in the side column, then put her copy in the wider column. I gave everything a cool "dark mode" look, using the HTML class called "bg=dark." 
![site copy](https://github.com/JDittes/UFOs/blob/main/static/css/images/page_copy.png)

Next I set up a filter for Dana using JavaScript. I instructed my index HTML file to use the JavaScript file by adding the following code: 
```
* <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>
* <script src="static/js/data.js"></script>
* <script src="static/js/app.js"></script>
```
The first script linked an image I'd saved to the web site. The second script linked Dana's data file to the site, which users have for their searches. The final script linked to a file called "app.js" that I had written to perform the functions of taking in users' searches and returning filtered results. Below is the form I placed on Dana's web site to help users with their searches.
![Search form](https://github.com/JDittes/UFOs/blob/main/static/css/images/filter.png)

The JavaScript code I wrote for the filter form consisted of three functions.

The first function, titled **buildTable** set up the table format, ensuring that there was a row for each UFO sighting, `data.forEach((dataRow) => {let row = tbody.append("tr");...` and a column for each piece of data about the sighting, `Object.values(dataRow).forEach((val) => { let cell = row.append("td");...`

Next I wrote a function called **updateFilters()**, which logged the users' selections as variables and prepared them for filtering. Using d3, I had a powerful shortcut to getting the code to respond to the user interactions on the web site. using `select(this)` I had the web site ready for what would come next, which would be the filtering. At the end of this function, I returned **filterTable()** which would be defined later in the code.

My filtering function was called **filterTable()**, which matched the input in `Object.entries` with the key-value pairs that matched the requests. I dispensed with a list of filtering all of the input boxes on the form by using an `Object.entries(filters).forEach(([key,value] => { filteredData = filteredData.filter(row => row[key === value)});....` This let me use each of the filter entries to further hone the search. Another d3 call at the end of my code put my two functions in concert to provide the user with the desired results. Finally I used `buildTable(tableData)` to rebuild a table containing only the desired results.

This is what the filter looked like when I searched for Dana's home state of Oregon
![oregon_results](https://github.com/JDittes/UFOs/blob/main/static/css/images/results_table.png)

## Summary: 
In making multiple searches of the data, there are a few things we could do to make searching easier
* The input should be filtered so that upper and lowercase words would count the same. For example, the states only take two lowercase letters to get a return, i.e. 'oh' for sightings in Ohio.  If the user enters 'OH' or 'Ohio' or 'oH', they get no results. I would add JavaScript code to make all entries lowercase.
* Another item that would benefit the filter would be dropdown menus, particularly for the **Shape** input box. For example, the box accepts the word 'circle,' but would reject 'saucer' or 'round' because that information is not in the data set. Giving users a dropdown menu to look at possible options would allow for more specific and more successful searches.
