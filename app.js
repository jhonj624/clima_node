const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Ciudad del mundo para obtener el clima'
    }
}).argv;

const getInfo = async(direccion) => {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.latitud, coors.longitud);

    return `El clima en ${coors.direccion} es de ${temp}°`;
}

lugar.getLugarLatLng(argv.descripcion)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });

/* clima.getClima(9.9280694, -84.0907246)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    }); */

console.log(argv.descripcion);

getInfo(argv.descripcion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))