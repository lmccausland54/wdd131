

//Get current year
let currentDate = new Date();

let currentYear = currentDate.getFullYear();

//Find the element with the id "currentYear"
let currentYearElement = document.getElementById("currentYear");

//Update content of element with the current year
currentYearElement.textContent = currentYear;


const lastModifiedDate = new Date(document.lastModified);

const lastModDateElement = document.getElementById("lastModified");

lastModDateElement.textContent = lastModifiedDate;