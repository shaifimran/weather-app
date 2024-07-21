const axios = require('axios');

const getWeather = async (req, res) => {
    const city = req.params.city;

    const geoCodingAPI = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    if (geoCodingAPI.data.results) {
        const { latitude, longitude } = geoCodingAPI.data.results[0];
        const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        res.status(200).json(weatherResponse.data);

    } else {
        res.status(400).json({
            status: 'fail',
            message: 'Please enter a valid city name!'
        });
    }
} 

module.exports = getWeather;