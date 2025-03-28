import React from "react";

class Q8 extends React.Component {
    temperature(temp, type) {
        if (type === 'C') {
            return (temp * 9/5) + 32;  
        } else if (type === 'F') {
            return (temp - 32) * 5/9;  
        }
        return NaN;
    }

    render() {
        let temp = parseFloat(prompt("Enter the temperature:"));
        let type = prompt("Enter the type (C for Celsius, F for Fahrenheit):");
        type = type.toUpperCase();
        let converted = this.temperature(temp, type);

        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Temperature Converter</h1>
                <h2 style={{ textAlign: 'center' }}>You entered: {temp}°{type}</h2>
                <h2 style={{ textAlign: 'center' }}>
                    Converted Temperature: {!isNaN(converted) ? `${converted.toFixed(2)}°${type === 'C' ? 'F' : 'C'}` : "Invalid conversion"}
                </h2>
            </div>
        );
    }
}

export default Q8;
