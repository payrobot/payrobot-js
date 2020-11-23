# Payrobot.PaymentApi

All URIs are relative to *https://api.payrobot.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPayment**](PaymentApi.md#createPayment) | **POST** /{currency}/payments | Generate a new one-use address to receive a payment
[**getPayment**](PaymentApi.md#getPayment) | **GET** /{currency}/payments/{paymentId} | Get detailed information about a payment



## createPayment

> PaymentRequest createPayment(currency, type, destination, amount, callback, opts)

Generate a new one-use address to receive a payment

Generates a new one-use address to receive a payment. It callbacks your web/app server as soon as it&#39;s paid and confirmed.  **Payment can be &#x60;forwarded&#x60; to another address or it can be &#x60;stored&#x60; in a payrobot.io wallet**     --- ## Important    * Unpaid requests are deleted after **3 hours** of theirs creation   * Confirmed payments information is deleted after **3 days** of being confirmed    --- ## Minimum Amounts     * &#x60;Bitcoin&#x60;: 0.0001 BTC   * &#x60;Litecoin&#x60;: 0.001 LTC   * &#x60;Bitcoin Cash&#x60;: 0.001 BCH    --- ## Callbacks A **payment notificacion** will be sent to your callback url in the following scenarios:    1. *Payment is received partially*   2. *Payment is being confirmed by network*   3. *Payment is confirmed at least with 1 confirmation*   The callback sent to your callback url is a **POST** request with the following parameters:  *Example:*      currency:         \&quot;BTC\&quot;     paymentId:        \&quot;698fd3f6-5482-4798-8a46-6732af440616\&quot;     address:          \&quot;3KoUDMfrov91G4SXaCKGvTWDjGia9Jod5b\&quot;     type:             0     partialAmount:    \&quot;0.00\&quot;                       //Partial amount received when payment is incomplete     remainingAmount:  \&quot;0.00\&quot;                       //Remaining amount to pay when payment is incomplete     amount:           \&quot;0.1\&quot;     feePct:           0.90     feeAmount:        \&quot;0.0009\&quot;     finalAmount:      \&quot;0.0991\&quot;     destination:      \&quot;698fd3f6-5482-4798-8a46-6732af440616\&quot;     reference:        \&quot;12345\&quot;     status:           2 

### Example

```javascript
import Payrobot from 'payrobot';

let apiInstance = new Payrobot.PaymentApi();
let currency = btc; // String | Object Currency:   * `btc`: Bitcoin   * `ltc`: Litecoin   * `bch`: Bitcoin Cash 
let type = 0; // Number | * `0: Receive and forward` payment is forwarded to a desired coin address once it's confirmed  * `1: Receive and store` payment is stored in a payrobot.io wallet 
let destination = bc1qzlza4ke65fa2sqacjfu5vtwy8ar6x8xttgk999; // String | * For `Receive and forward` payment is the `ADDRESS` where the payment is going to be forwarded as soon as it's confirmed. **ADDRESS HAS TO BE OF THE SAME TYPE OF CURRENCY**  * For `Receive and store` payment is the payrobot.io `WALLET ID` where the payment is going to be stored as soon as it's confirmed. **WALLET HAS TO BE OF THE SAME TYPE OF CURRENCY** 
let amount = 0.0129; // Number | Amount of the payment
let callback = https://your-callback-url.com; // String | Your URL where payrobot.io will send the status of the payment (Webhook)
let opts = {
  'reference': Bill123 // String | Optional custom reference to identify the payment
};
apiInstance.createPayment(currency, type, destination, amount, callback, opts, (error, data, response) => {
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
 **type** | **Number**| * &#x60;0: Receive and forward&#x60; payment is forwarded to a desired coin address once it&#39;s confirmed  * &#x60;1: Receive and store&#x60; payment is stored in a payrobot.io wallet  | 
 **destination** | **String**| * For &#x60;Receive and forward&#x60; payment is the &#x60;ADDRESS&#x60; where the payment is going to be forwarded as soon as it&#39;s confirmed. **ADDRESS HAS TO BE OF THE SAME TYPE OF CURRENCY**  * For &#x60;Receive and store&#x60; payment is the payrobot.io &#x60;WALLET ID&#x60; where the payment is going to be stored as soon as it&#39;s confirmed. **WALLET HAS TO BE OF THE SAME TYPE OF CURRENCY**  | 
 **amount** | **Number**| Amount of the payment | 
 **callback** | **String**| Your URL where payrobot.io will send the status of the payment (Webhook) | 
 **reference** | **String**| Optional custom reference to identify the payment | [optional] 

### Return type

[**PaymentRequest**](PaymentRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPayment

> PaymentRequest getPayment(currency, paymentId)

Get detailed information about a payment

Gets detailed information about a payment

### Example

```javascript
import Payrobot from 'payrobot';

let apiInstance = new Payrobot.PaymentApi();
let currency = btc; // String | Object Currency:   * `btc`: Bitcoin   * `ltc`: Litecoin   * `bch`: Bitcoin Cash 
let paymentId = 698fd3f6-5482-4798-8a46-6732af440616; // String | Payment ID to query
apiInstance.getPayment(currency, paymentId, (error, data, response) => {
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
 **paymentId** | **String**| Payment ID to query | 

### Return type

[**PaymentRequest**](PaymentRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

