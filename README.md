# Token Server
VX Token Server

1. Edit auth.js to add your consumerKey and consumerSecret
2. Edit server.js and follow instructions in the comments to setup HTTPS credentials.
2. run 'npm install'
3. run 'node server.js'

NOTE: You need to setup HTTPS to use this token server with your VX application.

API calls:
1) POST http://hostname/auth/token - this will get an access token
2) POST http://hostname/auth/refresh - refresh access token 

Response:
{
    "token_type": "Bearer",
    "access_token": "TOKEN",
    "refresh_token": "TOKEN",
    "expires_in": 3600
}

