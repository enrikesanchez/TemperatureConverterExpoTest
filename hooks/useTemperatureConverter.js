import {useState}  from 'react';
import TemperatureConverterAPI from '../apis/TemperatureConverterApi';
import { TemperatureVO } from '../valueobjects/TemperatureVO';

const useTemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { convert } = TemperatureConverterAPI();
    
    async function convertTemperature() {
        setErrorMessage("");
        let originalCelsius = new TemperatureVO(celsius, 'CELSIUS')
        
        try {
            let convertedFahrenheit = await convert(originalCelsius, 'FAHRENHEIT');
            console.log(convertedFahrenheit);
            setFahrenheit(convertedFahrenheit.value);    
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    setErrorMessage("Invalid Parameter:");
                    console.log(error.response.data.error.errors[0].msg);
                    return;
                }
            }
            setErrorMessage("Communication Error");
            console.log("Error: " + error);
            return;
        }
    }

    return { celsius, setCelsius, fahrenheit, setFahrenheit, convertTemperature, errorMessage }
}

export default useTemperatureConverter;