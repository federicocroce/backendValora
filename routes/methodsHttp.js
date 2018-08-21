// const express = require('express');
const cors = require('cors');

// const services = require('./services');

// const app = express();


const fetch = require('node-fetch');
const header = { 'Authorization': 'Bearer UvHW9Dq0xWgYEpDrCMgoLvoFU2B4Bfzu', 'MadivaConsumer': 'AR_VALORA_PRO' }


// app.get('/calcularValora', function (req, res) {
//   services.getProvinces()
//       .then(resData => {
//           res.status(200).send(resData);
//       })
//       .catch(err => {
//           res.send(err)
//       })
// });

module.exports = app => {

  app.use(cors({ origin: '*' }));

  app.post('/calcularValora', (req, res) => {

    // var body = req.body;
    var body = {
      "latitude": "-34.624319",
      "longitude": "-58.464585",
      "m2": "90",
      "propertyType": "flat"
     }

    fetch('https://madiva.inmoconsulta.com/ApiV3pre/rest/ar/testigos/valoracion', {
      method: 'POST',
      // agent: CONFIG.proxyHttps,
      headers: header,
      body: body
    })
      // .then((response) => response.json())
      // .then((json) => {
      //   res.json({
      //     response: json
      //   })
      // })
      // .catch(err => { console.log(err); });

    .then(response => {
      var a = response.json();
      console.log(a);
      a.then(data => {
        console.log(data);
      })
      
    }).catch(err => {console.log(err);});

    // res.send('Add ' + data);
  });


};











// 'use strict';

// (() => {
//     const CONFIG = require('../config/config');

//     const fetch = require('node-fetch');
//     const header = { 'Authorization': 'Bearer UvHW9Dq0xWgYEpDrCMgoLvoFU2B4Bfzu', 'MadivaConsumer': 'AR_VALORA_PRO' }

//     function executeService(path) {
//         return new Promise((resolve, reject) => {
//         fetch('https://madiva.inmoconsulta.com/' + path, {
//             agent: CONFIG.proxyHttps,
//             headers: header
//         })
//             .then((res) => res.json())
//             .then((json) => {
//                 resolve(json);
//                /*  return console.log(json); */
//             })
//             .catch(err => reject(err) );
//         })
//     }

//     function getProvinces() {
//         const path = 'ApiV3pre/rest/ar/geografia/provincias';
//         return executeService(path);
//     }

//     function getMunicipios(idProvince) {
//         const path = 'ApiV3pre/rest/ar/geografia/provincias/' + idProvince + '/municipios';
//         return executeService(path);
//     }

//     function getLocalidades(idProvince, idMunicipio) {
//         const path =  `ApiV3pre/rest/ar/geografia/provincias/${idProvince}/municipios/${idMunicipio}/localidades`
//         return executeService(path);
//     }

//     module.exports = {
//         getProvinces,
//         getMunicipios,
//         getLocalidades
//     }
// })();
