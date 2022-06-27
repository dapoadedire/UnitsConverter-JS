const celcius1 = document.getElementById('celcius1').value;
const celcius2 = document.getElementById('celcius2').value;

const fahrenheit1 = document.getElementById('fahrenheit1').value;
const fahrenheit2 = document.getElementById('fahrenheit2').value;

const kelvin1 = document.getElementById('kelvin1').value;
const kelvin2 = document.getElementById('kelvin2').value;




const temperature1_value = document.getElementById('temperature1_value');
const temperature2_value = document.getElementById('temperature2_value');


const temperature1 = document.querySelector('#temperature1');
const temperature2 = document.querySelector('#temperature2');

function checkTemparatures(temperature1, temperature2) {
    temperature1_value.value = parseFloat(temperature1_value.value);
    if (temperature1.value === celcius1) {
        if (temperature2.value === fahrenheit2) {
            temperature2_value.value = ((temperature1_value.value * 9 / 5) + 32).toFixed(2) + " °F";
        } else if (temperature2.value === kelvin2) {
            temperature2_value.value = (temperature1_value.value + 273.15).toFixed(2) + " K";
        }

    } else if (temperature1.value === fahrenheit1) {
        if (temperature2.value === celcius2) {
            temperature2_value.value = ((temperature1_value.value - 32) * 5 / 9).toFixed(2) + "°C";
        } else if (temperature2.value === kelvin2) {
            temperature2_value.value = ((temperature1_value.value - 32) * 5 / 9 + 273.15).toFixed(2) + "K";
        }

    } else if (temperature1.value === kelvin1) {
        if (temperature2.value === celcius2) {
            temperature2_value.value = (temperature1_value.value - 273.15).toFixed(2) + "°C";
        } else if (temperature2.value === fahrenheit2) {
            temperature2_value.value = ((temperature1_value.value - 273.15) * 9 / 5 + 32).toFixed(2) + "K";
        }
    }
    // else {
    //     alert("Choose the valid temperature unit(s)")
    // }
}



const convertButton = document.getElementById('convertButton');

convertButton.addEventListener('click', (event) => {
    checkTemparatures(temperature1, temperature2);
});

// const resetButton = document.getElementById('resetButton');
