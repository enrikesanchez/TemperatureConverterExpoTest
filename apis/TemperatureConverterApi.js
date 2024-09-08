import axios from 'axios';

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

const TemperatureConverterAPI = () => {
    async function convert(temperatureVO) {
        let response = await axios.post(`${baseUrl}${process.env.EXPO_PUBLIC_CONVERT_ENDPOINT}`, temperatureVO)

        return response.data;
    }

    return { convert }
}

export default TemperatureConverterAPI;