# Token Server
VX Token Server

1. Edit auth.js to add your consumerKey and consumerSecret
2. Edit server.js to add the path to your server HTTPS key and cert files.
2. run 'npm install'
3. run 'node server.js'

API to get API access token: POST http://hostname/auth/token
API to refresh API access token key: POST http://hostname/auth/token

If you don't have HTTPS credentials you can test this out with HTTP by following instructions in server.js comments. 

Voxeet documention:

Response:
{
    "token_type": "Bearer",
    "access_token": "TOKEN",
    "refresh_token": "TOKEN",
    "expires_in": 3600
}

