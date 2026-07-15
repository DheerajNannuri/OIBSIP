const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");

const celsiusOutput = document.getElementById("celsiusResult");
const fahrenheitOutput = document.getElementById("fahrenheitResult");
const kelvinOutput = document.getElementById("kelvinResult");

const errorMessage = document.getElementById("errorMessage");

convertButton.addEventListener("click", convertTemperature);

function convertTemperature() {

    errorMessage.textContent = "";

    const inputValue = temperatureInput.value.trim();

    if (inputValue === "") {
        errorMessage.textContent = "Please enter a temperature.";
        clearResults();
        return;
    }

    if (isNaN(inputValue)) {
        errorMessage.textContent = "Only numeric values are allowed.";
        clearResults();
        return;
    }

    const value = Number(inputValue);
    const unit = unitSelect.value;

    let celsius;

    switch (unit) {

        case "celsius":
            celsius = value;
            break;

        case "fahrenheit":
            celsius = (value - 32) * 5 / 9;
            break;

        case "kelvin":
            celsius = value - 273.15;
            break;
    }

    if (celsius < -273.15) {
        errorMessage.textContent =
            "Temperature cannot be below absolute zero.";
        clearResults();
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    celsiusOutput.textContent =
        `Celsius : ${celsius.toFixed(2)} °C`;

    fahrenheitOutput.textContent =
        `Fahrenheit : ${fahrenheit.toFixed(2)} °F`;

    kelvinOutput.textContent =
        `Kelvin : ${kelvin.toFixed(2)} K`;
}

function clearResults() {

    celsiusOutput.textContent = "Celsius : --";
    fahrenheitOutput.textContent = "Fahrenheit : --";
    kelvinOutput.textContent = "Kelvin : --";
}