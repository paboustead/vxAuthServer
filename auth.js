const express = require('express');
const router = express.Router();
const https = require('https');

consumerKey='****INSERT_YOUR_KEY_HERE****';
consumerSecret='****INSERT_YOUR_SECRET_HERE****';

router.get('/token',(req, res, next) => {
    const credentials = new Buffer.from(consumerKey+':'+consumerSecret).toString('base64');
    
    const data = JSON.stringify({
        'grant_type': 'client_credentials',
    });
    const options = {
        hostname: 'session.voxeet.com',
        port: 443,
        path: '/v1/oauth2/token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + credentials
        }
    };
    var token="";
    var httpreq = https.request(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            token=token+chunk;
        });
        response.on('end', function() {
          res.contentType='application/json;charset=UTF-8';
          res.status(200).json(JSON.parse(token));
          console.log(`get new token: ${token}`);
        })
    });
    httpreq.write(data);
    httpreq.end();
    
})

router.get('/refresh',(req, res, next) => {
    const credentials = new Buffer.from('YTRtMDZyanI1cHI2Nw=='+':'+'M3NtajhtZ2RzMzk3NmtoanNmNDlwY2lsY2w=').toString('base64');
    
    const data = JSON.stringify({
        "refresh_token": "string",
    });
    const options = {
        hostname: 'session.voxeet.com',
        port: 443,
        path: '/v1/oauth2/refresh',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + credentials
        }
    };
    var token="";
    var httpreq = https.request(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            token=token+chunk;
        });
        response.on('end', function() {
          res.contentType='application/json;charset=UTF-8';
          res.status(200).json(JSON.parse(token));
          console.log(`refresh: ${token}`);
        })
    });
    httpreq.write(data);
    httpreq.end();
    
})

module.exports = router;
