const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const services = require('./services/services');

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = 9010;

let server = app.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/provincias', function (req, res) {
    services.getProvinces()
        .then(resData => {
            res.status(200).send(resData);
        })
        .catch(err => {
            res.send(err)
        })
});

app.post('/municipios', function (req, res) {
    services.getMunicipios(req.body.idProvince)
        .then(resData => {
            res.status(200).send(resData);
        })
        .catch(err => {
            res.send(err)
        })
});

app.post('/localidades', function (req, res) {
    services.getLocalidades(req.body.params.idProvince, req.body.params.idMunicipio)
        .then(resData => {
            res.status(200).send(resData);
        })
        .catch(err => {
            res.send(err)
        })
});

app.get('/calcularValora', function (req, res) {
    // console.log(req.query)
    var params = {
        latitude: req.query.latitude,
        longitude: req.query.longitude,
        m2: req.query.m2,
        propertyType: req.query.propertyType
    }
    services.calcularValora(params)
        .then(resData => {
            res.status(200).send(resData);
        })
        .catch(err => {
            res.send(err)
        })
});