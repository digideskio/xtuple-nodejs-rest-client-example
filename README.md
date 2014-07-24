## xTuple Node.js REST ToDo Example Application

Node Application to work with [xTuple REST services.](http://github.com/xtuple/xtuple)

## How to Get Started:

### Create new OAuth2 Client

Before you can use this client with xTuple's OAuth 2.0 Server,
you need to install the OAuth 2.0 extension in your xTuple application
and create a reference for a new OAuth 2.0 Client. Be sure to select a
"Client Type" of "Service Account" and ensure that "Delegated Access" is checked.
This will generate a private key and give you all the other information that you will
need to connect to the xTuple REST API.

### Test this OAuth2 API Client

Clone this repository and run `npm install`

To start the application, run `node app.js`

Navigate to `http://localhost:3000` in your browser

### Set your Private Key

Convert your key.p12 file to key.pem and copy it to the `keys` folder:

`openssl pkcs12 -in keys/key.p12  -nocerts -nodes | openssl rsa -out keys/key.pem`

Enter Import Password: 'notasecret'

### Setup Environment Variables

`cp sample.env .env`

Open the .env file and change the information to match what was provided
by the xTuple OAuth 2.0 extension.

### License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

Copyright (c) 2012-2013 xTuple [http://www.xtuple.com/](http://www.xtuple.com/)
