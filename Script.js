Scrip.js
function convertToCelsius() {
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");
    
    const celsiusValue = parseFloat(celsiusInput.value);
    if (isNaN(celsiusValue)) {
        resultElement.textContent = "Invalid input";
        return;
    }
    
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    resultElement.textContent = `${celsiusValue}°C is ${fahrenheitValue.toFixed(2)}°F`;
}
