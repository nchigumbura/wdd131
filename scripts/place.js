// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Calculate wind chill
    const calculateWindChill = (temp, windSpeed) => {
      if (temp <= 10 && windSpeed > 4.8) {
        return (
          13.12 +
          0.6215 * temp -
          11.37 * Math.pow(windSpeed, 0.16) +
          0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(1);
      }
      return "N/A";
    };
  
    const temp = 24; // °C
    const windSpeed = 10; // km/h
    document.getElementById("windchill").textContent = calculateWindChill(
      temp,
      windSpeed
    );
  
    // Set footer details
    const lastModified = new Date(document.lastModified);
    document.getElementById("last-modified").textContent = lastModified.toLocaleDateString(
      "en-GB"
    );
  });
  