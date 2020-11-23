# Payrobot.WalletApi

All URIs are relative to *https://api.payrobot.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWallet**](WalletApi.md#createWallet) | **POST** /{currency}/wallets | Create new wallet
[**createWalletSendRequest**](WalletApi.md#createWalletSendRequest) | **POST** /{currency}/wallets/{walletId}/send-requests | Send funds from a wallet
[**getWallet**](WalletApi.md#getWallet) | **GET** /{currency}/wallets/{walletId} | Get Wallet information
[**getWalletHistory**](WalletApi.md#getWalletHistory) | **GET** /{currency}/wallets/{walletId}/history | Get last transactions of wallet
[**getWalletSendRequest**](WalletApi.md#getWalletSendRequest) | **GET** /{currency}/wallets/{walletId}/send-requests/{requestId} | Obtain information of a send request



## createWallet

> WalletCreationInfo createWallet(currency)

Create new wallet

Creates a new wallet where you can receive, store and send funds for your web or app.  --- ## Important This method returns your &#x60;Wallet Passphrase&#x60;, it will be required when you send funds from your wallet. **Please keep it safe and private** 

### Example

```javascript
import Payrobot from 'payrobot';

let apiInstance = new Payrobot.WalletApi();
let currency = btc; // String | Object Currency:   * `btc`: Bitcoin   * `ltc`: Litecoin   * `bch`: Bitcoin Cash 
apiInstance.createWallet(currency, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Object Currency:   * &#x60;btc&#x60;: Bitcoin   * &#x60;ltc&#x60;: Litecoin   * &#x60;bch&#x60;: Bitcoin Cash  | 

### Return type

[**WalletCreationInfo**](WalletCreationInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createWalletSendRequest

> WalletSendRequest createWalletSendRequest(currency, walletId, destination, seed, token, opts)

Send funds from a wallet

Sends funds from a wallet to one or multiple addresses.  --- ## Required Authorization Token This transaction requires an authorization &#x60;token&#x60; which is the result of the &#x60;sha-256&#x60; hash of the following string:        walletId~destination~seed~walletPassphrase    **For example**  Considering the following example values for the token:   - &#x60;walletId&#x60; 9df3f909-088d-4724-b34f-9a587c5ccc15   - &#x60;destination&#x60;     [{\&quot;address\&quot;:\&quot;bc1q5defveu0acrf87m3huwxjq6pqaszdjf3d4ej9y\&quot;,\&quot;amount\&quot;:0.01},{\&quot;address\&quot;:\&quot;bc1qs59a7e23zpjm0znteytrxvj839dlp205e50zch\&quot;,\&quot;amount\&quot;:0.056}]     - &#x60;seed&#x60; 758748394   - &#x60;walletPassphrase&#x60; **Note: this was provided when you created the wallet** OHh6IIININmfmjGGsxlBBft2ch61VncaPscsp295h2ULx9xPY07Jom3d5cBifgoW    The resulting string, previous to hash is::        9df3f909-088d-4724-b34f-9a587c5ccc15~[{\&quot;address\&quot;:\&quot;bc1q5defveu0acrf87m3huwxjq6pqaszdjf3d4ej9y\&quot;,\&quot;amount\&quot;:0.01},{\&quot;address\&quot;:\&quot;bc1qs59a7e23zpjm0znteytrxvj839dlp205e50zch\&quot;,\&quot;amount\&quot;:0.056}]~758748394~OHh6IIININmfmjGGsxlBBft2ch61VncaPscsp295h2ULx9xPY07Jom3d5cBifgoW    Finally after applying &#x60;sha-256&#x60; hash, we obtain the required &#x60;token&#x60;:        804ca9457b0fe3e4d243fe9e39e760ff1f287491ae8e79d015f92f7c6c96d7b1       --- ## Important    * Send requests are commonly queued, optionally you can specify a callback to get your web / app notified as soon as the request has been fully broadcasted to the Network.    * Transaction is limited to &#x60;25&#x60; destination addresses per request      * Tx Hash is provided only through the callback      * Confirmed send requests information is &#x60;DELETED&#x60; after &#x60;3 days&#x60; of being confirmed    --- ## Minimum Send Amounts     * &#x60;Bitcoin&#x60;: 0.0001 BTC   * &#x60;Litecoin&#x60;: 0.001 LTC   * &#x60;Bitcoin Cash&#x60;: 0.001 BCH    --- ## Callback Send requests are commonly queued, optionally you can specify a callback to get your web / app notified as soon as the request has been fully broadcasted to the Network.  The callback sent to your callback url is a **POST** request with the following parameters:       *Example:*      currency:     \&quot;BTC\&quot;     walletId:     \&quot;698fd3f6-5482-4798-8a46-6732af440616\&quot;     requestId:    \&quot;123fd3f6-9078-5790-4f40-6932bf440120\&quot;     timestamp:    1577179288     lastupdate:   1577179388     amount:       \&quot;0.01\&quot;     callback:     \&quot;https://callback-url.com\&quot;     destination:  &#39;[{\&quot;address\&quot;: \&quot;bc1qf6ss0qtdn5q42...\&quot;                   \&quot;amount\&quot;: \&quot;0.01\&quot;}]&#39;     txid:         \&quot;2cdac43e92e65cb428e3ed992bcf61347...\&quot;     status:       0 

### Example

```javascript
import Payrobot from 'payrobot';

let apiInstance = new Payrobot.WalletApi();
let currency = btc; // String | Object Currency:   * `btc`: Bitcoin   * `ltc`: Litecoin   * `bch`: Bitcoin Cash 
let walletId = 9df3f909-088d-4724-b34f-9a587c5ccc15; // String | Wallet where funds to send are stored
let destination = [{"address":"bc1q5defveu0acrf87m3huwxjq6pqaszdjf3d4ej9y","amount":0.01},{"address":"bc1qs59a7e23zpjm0znteytrxvj839dlp205e50zch","amount":0.056}]
; // String | JSON formatted array with all the destination addres(es) and the amount(s) to send\\ `[{\"address\":\"desired-destination-address\",\"amount\":X.XXXXXXXX}, ...]` 
let seed = 12345; // String | Unique random string generated by your web/app. **IT MUST BE UNIQUE PER TRANSACTION PER WALLET**
let token = c3c081de9510e8405839f36a875aa9fef43032caa3015305b27d6b7e0bcfc182; // String | SHA-256 hash of the concatenated string (substituting with the proper data):\\ `walletId~destination~seed~walletPassphrase` 
let opts = {
  'callback': https://your-app-url.com/example // String | Optional callback to notify your web / app as soon as the send request has been fully broadcasted to the Network
};
apiInstance.createWalletSendRequest(currency, walletId, destination, seed, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Object Currency:   * &#x60;btc&#x60;: Bitcoin   * &#x60;ltc&#x60;: Litecoin   * &#x60;bch&#x60;: Bitcoin Cash  | 
 **walletId** | **String**| Wallet where funds to send are stored | 
 **destination** | **String**| JSON formatted array with all the destination addres(es) and the amount(s) to send\\ &#x60;[{\&quot;address\&quot;:\&quot;desired-destination-address\&quot;,\&quot;amount\&quot;:X.XXXXXXXX}, ...]&#x60;  | 
 **seed** | **String**| Unique random string generated by your web/app. **IT MUST BE UNIQUE PER TRANSACTION PER WALLET** | 
 **token** | **String**| SHA-256 hash of the concatenated string (substituting with the proper data):\\ &#x60;walletId~destination~seed~walletPassphrase&#x60;  | 
 **callback** | **String**| Optional callback to notify your web / app as soon as the send request has been fully broadcasted to the Network | [optional] 

### Return type

[**WalletSendRequest**](WalletSendRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWallet

> Wallet getWallet(currency, walletId)

Get Wallet information

Gets detailed information from a Wallet

### Example

```javascript
import Payrobot from 'payrobot';

let apiInstance = new Payrobot.WalletApi();
let currency = btc; // String | Object Currency:   * `btc`: Bitcoin   * `ltc`: Litecoin   * `bch`: Bitcoin Cash 
let walletId = 775937b9-b7fc-47cf-be7c-934d602bd6af; // String | ID of the desired Wallet
apiInstance.getWallet(currency, walletId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Object Currency:   * &#x60;btc&#x60;: Bitcoin   * &#x60;ltc&#x60;: Litecoin   * &#x60;bch&#x60;: Bitcoin Cash  | 
 **walletId** | **String**| ID of the desired Wallet | 

### Return type

[**Wallet**](Wallet.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletHistory

> WalletHistory getWalletHistory(currency, walletId)

Get last transactions of wallet

Gets last 100 transactions of the wallet

### Example

```javascript
import Payrobot from 'payrobot';

let apiInstance = new Payrobot.WalletApi();
let currency = btc; // String | Object Currency:   * `btc`: Bitcoin   * `ltc`: Litecoin   * `bch`: Bitcoin Cash 
let walletId = dd304d65-b606-4462-854b-51cdf061b00f; // String | ID of the desired Wallet
apiInstance.getWalletHistory(currency, walletId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Object Currency:   * &#x60;btc&#x60;: Bitcoin   * &#x60;ltc&#x60;: Litecoin   * &#x60;bch&#x60;: Bitcoin Cash  | 
 **walletId** | **String**| ID of the desired Wallet | 

### Return type

[**WalletHistory**](WalletHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletSendRequest

> WalletSendRequest getWalletSendRequest(currency, walletId, requestId)

Obtain information of a send request

Obtains detailed information about a send request

### Example

```javascript
import Payrobot from 'payrobot';

let apiInstance = new Payrobot.WalletApi();
let currency = btc; // String | Object Currency:   * `btc`: Bitcoin   * `ltc`: Litecoin   * `bch`: Bitcoin Cash 
let walletId = 9df3f909-088d-4724-b34f-9a587c5ccc15; // String | Wallet where funds to send are stored
let requestId = 54f78565-56e2-4ece-b925-cab6ed67eb63; // String | Send Request ID
apiInstance.getWalletSendRequest(currency, walletId, requestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Object Currency:   * &#x60;btc&#x60;: Bitcoin   * &#x60;ltc&#x60;: Litecoin   * &#x60;bch&#x60;: Bitcoin Cash  | 
 **walletId** | **String**| Wallet where funds to send are stored | 
 **requestId** | **String**| Send Request ID | 

### Return type

[**WalletSendRequest**](WalletSendRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

