// getdates.js

// Dynamically output the current year in the footer's first paragraph
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Output the date the document was last modified in the second paragraph
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
