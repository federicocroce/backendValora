// 'use strict';

// (() => {
//     const CONFIG = require('../config/config');

//     const fetch = require('node-fetch');
//     const header = { 'Authorization': 'Bearer UvHW9Dq0xWgYEpDrCMgoLvoFU2B4Bfzu', 'MadivaConsumer': 'AR_VALORA_PRO' }

//     // function calcularValora(path) {
//     //     return new Promise((resolve, reject) => {
//     //         fetch('https://madiva.inmoconsulta.com/ApiV3pre/rest/ar/testigos/valoracion', {
//     //             agent: CONFIG.proxyHttps,
//     //             headers: header
//     //         })
//     //             .then((res) => res.json())
//     //             .then((json) => {
//     //                 resolve(json);
//     //                 /*  return console.log(json); */
//     //             })
//     //             .catch(err => reject(err));
//     //     })
//     // };



//     app.post('/items', function (req, res) {

//         var body = req.body;

//         fetch('https://madiva.inmoconsulta.com/ApiV3pre/rest/ar/testigos/valoracion', {
//             method: 'POST',
//             agent: CONFIG.proxyHttps,
//             headers: header,
//             body: body
//         }).then(response => {
//             return response.json();
//         }).catch(err => { console.log(err); });


//         res.send('Add ' + data);
//     });











//     // function calcularValora() {
//     //     const path = 'ApiV3pre/rest/ar/geografia/provincias';
//     //     return executeService(path);
//     // }

//     // function getMunicipios(idProvince) {
//     //     const path = 'ApiV3pre/rest/ar/geografia/provincias/' + idProvince + '/municipios';
//     //     return executeService(path);
//     // }

//     // function getLocalidades(idProvince, idMunicipio) {
//     //     const path =  `ApiV3pre/rest/ar/geografia/provincias/${idProvince}/municipios/${idMunicipio}/localidades`
//     //     return executeService(path);
//     // }

//     module.exports = {
//         calcularValora
//     }
// })();