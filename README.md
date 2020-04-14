# Token Server
VX Token Server

1. Edit auth.js to add your consumerKey and consumerSecret
2. Edit server.js and follow instructions in the comments to setup HTTPS credentials.
2. run 'npm install'
3. run 'node server.js'

API to get API access token: POST http://hostname/auth/token
API to refresh API access token key: POST http://hostname/auth/token 

Voxeet documention:

Response:
{
    "token_type": "Bearer",
    "access_token": "TOKEN",
    "refresh_token": "TOKEN",
    "expires_in": 3600
}

