'use strict';

(() => {
    const CONFIG = require('../config/config');

    const fetch = require('node-fetch');
    const header = { 'Authorization': 'Bearer UvHW9Dq0xWgYEpDrCMgoLvoFU2B4Bfzu', 'MadivaConsumer': 'AR_VALORA_PRO' }

    function executeService(path) {
        console.log(path);
        return new Promise((resolve, reject) => {
            fetch('https://madiva.inmoconsulta.com/' + path, {
                agent: CONFIG.proxyHttps,
                headers: header
            })
                .then((res) => res.json())
                .then((json) => {
                    resolve(json);
                    /*  return console.log(json); */
                })
                .catch(err => reject(err));
        })
    }

    function getProvinces() {
        const path = 'ApiV3pre/rest/ar/geografia/provincias';
        return executeService(path);
    }

    function getMunicipios(idProvince) {
        const path = 'ApiV3pre/rest/ar/geografia/provincias/' + idProvince + '/municipios';
        return executeService(path);
    }

    function getLocalidades(idProvince, idMunicipio) {
        const path = `ApiV3pre/rest/ar/geografia/provincias/${idProvince}/municipios/${idMunicipio}/localidades`
        return executeService(path);
    }

    function calcularValora(params) {
        const path = `ApiV3pre/rest/ar/testigos/valoracion?latitude=${params.latitude}&longitude=${params.longitude}&m2=${params.m2}&propertyType=${params.propertyType}`
        return executeService(path, params);
    }

    module.exports = {
        getProvinces,
        getMunicipios,
        getLocalidades,
        calcularValora
    }
})();







// app.get('/validar', function (req, res) {
//     var params = {
//         latitude: req.params.latitude,
//         longitude: req.params.longitude,
//         m2: req.params.m2,
//         propertyType: req.params.propertyType
//     }
//     console.log(params);
//     services.getValidation(params)
//         .then(resData => {
//             res.status(200).send(resData);
//         })
//         .catch(err => {
//             res.send(err)
//         })
// });