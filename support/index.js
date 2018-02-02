// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#date_time");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
// to reload the table 
var $loadBtn = document.querySelector("#load");

// Btns for next and prev 
var $nextBtn = document.querySelector("#next");
var $prevBtn = document.querySelector("#prev");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$loadBtn.addEventListener("click", handleReloadButtonClick);

// events for next and prev 
$nextBtn.addEventListener("click", handleNextButtonClick);
$prevBtn.addEventListener("click", handlePrevButtonClick);

// Set filteredData to Data initially
var filteredData = data;
var count = 0;


function handleNextButtonClick() {
    count++;
    renderTable();
    //console.log(count);
    //return count
}


function handlePrevButtonClick() {
    count--;
    renderTable();
    //console.log(count);
    //return count
}


// renderTable renders the filteredData to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    // page 
    var start = count * 5;
    console.log(start)
    var end = start + 5;
    console.log()
    if (end > filteredData.length) {
        end = filteredData.length;
    }
    for (var i = 0; i < 10; i++) {
        // Get get the current item object and its fields
        var item = filteredData[i+(count * 10)];
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
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
    var filterShape = $shapeInput.value.trim().toLowerCase();


    // Set filtered to an array of all datae" matches the filter

    if (filterDate != "") {
        filteredData = filteredData.filter(function (date) {
        var dataDate = date.datetime;
        //console.log(dataDate)

        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataDate === filterDate;
    });

    }

    // Set filtered to an array of all datae" matches the filter

    if (filterCity != "") {
        filteredData = filteredData.filter(function (city) {
        var dataCity = city.city;
        //console.log(dataCity)

        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return dataCity === filterCity;
    });
    }

    if (filterState != "") {
        filteredData = filteredData.filter(function (state) {
            var dataState = state.state;
      
            return dataState === filterState;
        });
    }

    if (filterCountry != "") {
        filteredData = filteredData.filter(function (country) {
            var dataCountry = country.country;

            return dataCountry === filterCountry;
        });
    }

    if (filterShape != "") {
        filteredData = filteredData.filter(function (shape) {
            var dataShape = shape.shape;

            return dataShape === filterShape;
        });
    }

    renderTable();
}

function handleReloadButtonClick() {

    filteredData = data;
    $dateTimeInput.value = '';
    $cityInput.value = '';
    $stateInput.value = '';
    $countryInput.value = '';
    $shapeInput.value = '';

    renderTable();
}



// Render the table for the first time on page load
renderTable();