// Increment the review count in localStorage
if (localStorage.getItem("reviewCount")) {
    localStorage.setItem("reviewCount", parseInt(localStorage.getItem("reviewCount")) + 1);
  } else {
    localStorage.setItem("reviewCount", 1);
  }
  
  // Display the updated review count
  const counterElement = document.getElementById("counter");
  counterElement.textContent = `Total Reviews Submitted: ${localStorage.getItem("reviewCount")}`;
  