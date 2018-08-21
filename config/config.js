'use strict';
(() => {
    const HttpsProxyAgent = require('https-proxy-agent');
    let proxyHttps = new HttpsProxyAgent('http://a126032:Cuervo06@200.5.92.180:8080');
    
    module.exports = {
        proxyHttps
    }
})();