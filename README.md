# Payrobot Javascript SDK

Payrobot - JavaScript client for payrobot
# Introduction
Accept, store, send or forward Bitcoin, Litecoin and Bitcoin Cash for your website or app and protect your privacy.

Supported crytocurrencies:
  * BTC Bitcoin
  * LTC Litecoin
  * BCH Bitcoin Cash


## Benefits

  * **Anonymous** No personal details are required and transactions are mixed among all payments. You can forward your payments so as soon payrobot.io receives it forwards it to another address under your control.
  
  * **No Registration** No registration, sign-up, application or form required to use payrobot.io
  
  * **Easy Integration** Integrate your web / app through our simple RESTful API, you can accept payments with just one line of code!
  
  * **Instant Payment Notification** Our servers notify your web / app the status of your payments. No polling, daemons or cronjobs required on your side!
  
  * **Secure** Payrobot.io works with SSL and bank-level security protocols. Your transactions are safe!


## Features
**Payment Forward**
Generate one-time addresses to recieve payments. Payrobot will notify your web /app through callbacks (webhooks) the status of the payment. As soon as it's confirmed the payment is forwarded to your desired address.

**Wallet**
Receive, send payments and store your coins in a secure, private and anonymous wallet. All events are notified to your web / app through callbacks (webhooks). You can generate wallets with just one line of code without registration or further information

## Fees
**Only 0.90% per inbound transaction** (receive payments), NO HIDDEN FEES. All outbound transactions (send funds) are totally free.

Minimum fees applies, therefore the largest amount is going to be considered as fee either: `(inboundAmount*feePct)` or `the minimum fee`

**Inbound Fees (Receive payments)**

  - `Bitcoin` 0.90% *(Minimum fee 0.00005 BTC)*
  - `Litecoin` 0.90% *(Minimum fee 0.0005 LTC)*
  - `Bitcoin Cash` 0.90% *(Minimum fee 0.0005 BCH)*
  

**Outbound Fees (Send funds)**

  - `Bitcoin` 0.00%
  - `Litecoin` 0.00%
  - `Bitcoin Cash` 0.00%


## Rate Limit
To guarantee the good performance of the service and its fair use. The API is **limited to receiving 120 requests per minute per IP**, which is sufficient for most use cases.

Payrobot.io is asynchronous in most API methods to communicate with your application through callbacks (webhooks), thus reducing unnecessary calls to the service.

**If the limit is exceeded, the IP will be banned for 1 minute.**

If you require an upper limit for your application, do not hesitate to contact us

## Considerations

  * Amounts in responses are expresed as `strings`
  
  * Wallets are not multi-currency, you have to create a different wallet per cryptocurrency (You can't store Litecoin in a Bitcoin wallet and vice-versa)
  
  * Payment forwarding has to be of the same type of currency (You can't forward a Bitcoin Cash payment to a Bitcoin address and vice-versa)
  

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### git

The library is hosted at a git repository https://github.com/payrobot/payrobot-js
then install it via:

```shell
    git clone https://github.com/payrobot/payrobot-js
    cd payrobot-js
    npm install --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Payrobot = require('payrobot');


var api = new Payrobot.PaymentApi()
var currency = 'btc'; // {String} Object Currency:   * `btc`: Bitcoin   * `ltc`: Litecoin   * `bch`: Bitcoin Cash 
var type = 0; // {Number} * `0: Receive and forward` payment is forwarded to a desired coin address once it's confirmed  * `1: Receive and store` payment is stored in a payrobot.io wallet 
var destination = 'bc1qzlza4ke65fa2sqacjfu5vtwy8ar6x8xttgk999'; // {String} * For `Receive and forward` payment is the `ADDRESS` where the payment is going to be forwarded as soon as it's confirmed. **ADDRESS HAS TO BE OF THE SAME TYPE OF CURRENCY**  * For `Receive and store` payment is the payrobot.io `WALLET ID` where the payment is going to be stored as soon as it's confirmed. **WALLET HAS TO BE OF THE SAME TYPE OF CURRENCY** 
var amount = 0.0129; // {Number} Amount of the payment
var callback = 'https://your-callback-url.com'; // {String} Your URL where payrobot.io will send the status of the payment (Webhook)
var opts = {
  'reference': 'Bill123' // {String} Optional custom reference to identify the payment
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createPayment(currency, type, destination, amount, callback, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.payrobot.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Payrobot.PaymentApi* | [**createPayment**](docs/PaymentApi.md#createPayment) | **POST** /{currency}/payments | Generate a new one-use address to receive a payment
*Payrobot.PaymentApi* | [**getPayment**](docs/PaymentApi.md#getPayment) | **GET** /{currency}/payments/{paymentId} | Get detailed information about a payment
*Payrobot.WalletApi* | [**createWallet**](docs/WalletApi.md#createWallet) | **POST** /{currency}/wallets | Create new wallet
*Payrobot.WalletApi* | [**createWalletSendRequest**](docs/WalletApi.md#createWalletSendRequest) | **POST** /{currency}/wallets/{walletId}/send-requests | Send funds from a wallet
*Payrobot.WalletApi* | [**getWallet**](docs/WalletApi.md#getWallet) | **GET** /{currency}/wallets/{walletId} | Get Wallet information
*Payrobot.WalletApi* | [**getWalletHistory**](docs/WalletApi.md#getWalletHistory) | **GET** /{currency}/wallets/{walletId}/history | Get last transactions of wallet
*Payrobot.WalletApi* | [**getWalletSendRequest**](docs/WalletApi.md#getWalletSendRequest) | **GET** /{currency}/wallets/{walletId}/send-requests/{requestId} | Obtain information of a send request


## Documentation for Models

 - [Payrobot.AddressDetail](docs/AddressDetail.md)
 - [Payrobot.CryptoCurrency](docs/CryptoCurrency.md)
 - [Payrobot.ErrorResponse](docs/ErrorResponse.md)
 - [Payrobot.PaymentRequest](docs/PaymentRequest.md)
 - [Payrobot.Wallet](docs/Wallet.md)
 - [Payrobot.WalletCreationInfo](docs/WalletCreationInfo.md)
 - [Payrobot.WalletHistory](docs/WalletHistory.md)
 - [Payrobot.WalletSendRequest](docs/WalletSendRequest.md)
 - [Payrobot.WalletTransaction](docs/WalletTransaction.md)


## Documentation for Authorization

All endpoints do not require authorization.
