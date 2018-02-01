// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#date_time");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to Data initially
var filteredData = data;


// renderTable renders the filteredData to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredData.length; i++) {
        // Get get the current item object and its fields
        var item = filteredData[i];
        var fields = Object.keys(item);
        // Create a new row in the tbody, set the index to be i + startingIndex
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = item[field];
        }
    }
}


function handleSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterDate = $dateTimeInput.value.trim();

    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = data.filter(function (date) {
        var dataDate = address.datetime;

        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataDate === filterDate;
    });
    renderTable();
}


// Render the table for the first time on page load
renderTable();