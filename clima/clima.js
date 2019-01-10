const axios = require('axios');
// la librería axios funcion mediante promesas
// otra opción es utilizar la librería request*
let open_weather_key = '3f496a69858bb6ee0d4c3c72821c4aa1';


const getClima = async(lat, lng) => {
    let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${open_weather_key}`);

    return result.data.main.temp
}


module.exports = {
    getClima,
}