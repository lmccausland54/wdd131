

//Get current year
let currentDate = new Date();

let currentYear = currentDate.getFullYear();

//Find the element with the id "currentYear"
let currentYearElement = document.getElementById("currentYear");

//Update content of element with the current year
currentYearElement.textContent = currentYear;

//Declare variable to hold the last modified date
const lastModifiedDate = new Date(document.lastModified);


//Find element with id "lastModified"
const lastModDateElement = document.getElementById("lastModified");


//Update content of element with last modified date
lastModDateElement.textContent = lastModifiedDate;