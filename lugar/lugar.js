const axios = require('axios');
// la librería axios funcion mediante promesas
// otra opción es utilizar la librería request*

const getLugarLatLng = async(descripcion) => {

    let encodeUrl = encodeURI(descripcion);

    let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (result.status === 'ZERO_RESULTS') {
        throw new Error(`No hay ninguna ciudad encontrada para ${descripcion}`)
    }

    let address = result.data.results[0];

    let direccion = address.formatted_address;
    let latitud = address.geometry.location.lat;
    let longitud = address.geometry.location.lng;
    return {
        direccion,
        latitud,
        longitud
    }


}

module.exports = {
    getLugarLatLng,
}