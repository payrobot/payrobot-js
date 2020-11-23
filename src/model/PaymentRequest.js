/**
 * Payrobot
 * # Introduction Accept, store, send or forward Bitcoin, Litecoin and Bitcoin Cash for your website or app and protect your privacy.  Supported crytocurrencies:   * BTC Bitcoin   * LTC Litecoin   * BCH Bitcoin Cash   ## Benefits    * **Anonymous** No personal details are required and transactions are mixed among all payments. You can forward your payments so as soon payrobot.io receives it forwards it to another address under your control.      * **No Registration** No registration, sign-up, application or form required to use payrobot.io      * **Easy Integration** Integrate your web / app through our simple RESTful API, you can accept payments with just one line of code!      * **Instant Payment Notification** Our servers notify your web / app the status of your payments. No polling, daemons or cronjobs required on your side!      * **Secure** Payrobot.io works with SSL and bank-level security protocols. Your transactions are safe!   ## Features **Payment Forward** Generate one-time addresses to recieve payments. Payrobot will notify your web /app through callbacks (webhooks) the status of the payment. As soon as it's confirmed the payment is forwarded to your desired address.  **Wallet** Receive, send payments and store your coins in a secure, private and anonymous wallet. All events are notified to your web / app through callbacks (webhooks). You can generate wallets with just one line of code without registration or further information  ## Fees **Only 0.90% per inbound transaction** (receive payments), NO HIDDEN FEES. All outbound transactions (send funds) are totally free.  Minimum fees applies, therefore the largest amount is going to be considered as fee either: `(inboundAmount*feePct)` or `the minimum fee`  **Inbound Fees (Receive payments)**    - `Bitcoin` 0.90% *(Minimum fee 0.00005 BTC)*   - `Litecoin` 0.90% *(Minimum fee 0.0005 LTC)*   - `Bitcoin Cash` 0.90% *(Minimum fee 0.0005 BCH)*     **Outbound Fees (Send funds)**    - `Bitcoin` 0.00%   - `Litecoin` 0.00%   - `Bitcoin Cash` 0.00%   ## Rate Limit To guarantee the good performance of the service and its fair use. The API is **limited to receiving 120 requests per minute per IP**, which is sufficient for most use cases.  Payrobot.io is asynchronous in most API methods to communicate with your application through callbacks (webhooks), thus reducing unnecessary calls to the service.  **If the limit is exceeded, the IP will be banned for 1 minute.**  If you require an upper limit for your application, do not hesitate to contact us  ## Considerations    * Amounts in responses are expresed as `strings`      * Wallets are not multi-currency, you have to create a different wallet per cryptocurrency (You can't store Litecoin in a Bitcoin wallet and vice-versa)      * Payment forwarding has to be of the same type of currency (You can't forward a Bitcoin Cash payment to a Bitcoin address and vice-versa)    
 *
 * The version of the OpenAPI document: 1.0
 * Contact: contact@payrobot.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CryptoCurrency from './CryptoCurrency';

/**
 * The PaymentRequest model module.
 * @module model/PaymentRequest
 * @version 1.0
 */
class PaymentRequest {
    /**
     * Constructs a new <code>PaymentRequest</code>.
     * @alias module:model/PaymentRequest
     */
    constructor() { 
        
        PaymentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentRequest} obj Optional instance to populate.
     * @return {module:model/PaymentRequest} The populated <code>PaymentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentRequest();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = CryptoCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('paymentId')) {
                obj['paymentId'] = ApiClient.convertToType(data['paymentId'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('pin')) {
                obj['pin'] = ApiClient.convertToType(data['pin'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('callback')) {
                obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
            }
            if (data.hasOwnProperty('feePct')) {
                obj['feePct'] = ApiClient.convertToType(data['feePct'], 'Number');
            }
            if (data.hasOwnProperty('feeAmount')) {
                obj['feeAmount'] = ApiClient.convertToType(data['feeAmount'], 'String');
            }
            if (data.hasOwnProperty('finalAmount')) {
                obj['finalAmount'] = ApiClient.convertToType(data['finalAmount'], 'String');
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('lastupdate')) {
                obj['lastupdate'] = ApiClient.convertToType(data['lastupdate'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CryptoCurrency} currency
 */
PaymentRequest.prototype['currency'] = undefined;

/**
 * Unique identifier of the payment in selected currency
 * @member {String} paymentId
 */
PaymentRequest.prototype['paymentId'] = undefined;

/**
 * One-use address for receive your client payment
 * @member {String} address
 */
PaymentRequest.prototype['address'] = undefined;

/**
 * PIN, it will be required if you need support with this payment.\\ *Note: It's provided only the first time you create the payment request*
 * @member {String} pin
 */
PaymentRequest.prototype['pin'] = undefined;

/**
 * * `0: Receive and forward` payment is forwarded to a desired coin address once it's confirmed  * `1: Receive and store` payment is stored in a payrobot.io wallet 
 * @member {Number} type
 */
PaymentRequest.prototype['type'] = undefined;

/**
 * The payment amount your client has to send to the coin address
 * @member {String} amount
 */
PaymentRequest.prototype['amount'] = undefined;

/**
 * URL where payrobot.io will send the status of the payment (Webhook)
 * @member {String} callback
 */
PaymentRequest.prototype['callback'] = undefined;

/**
 * Fee percentage that will be discounted
 * @member {Number} feePct
 * @default 0.9
 */
PaymentRequest.prototype['feePct'] = 0.9;

/**
 * Fee amount that will be discounted
 * @member {String} feeAmount
 */
PaymentRequest.prototype['feeAmount'] = undefined;

/**
 * Final amount of the transaction (Fee discount is already applied)   * For `Receive and forward` payment is the total amount to `forward` as soon as the payment is confirmed         * For `Receive and forward` payment is the total amount to `store` in the wallet as soon as the payment is confirmed
 * @member {String} finalAmount
 */
PaymentRequest.prototype['finalAmount'] = undefined;

/**
 * * For `Receive and forward` payment is the coin `ADDRESS` where the payment is going to be forwarded as soon as it's confirmed  * For `Receive and store` payment is the `WALLET ID` where the payment is going to be stored as soon as it's confirmed 
 * @member {String} destination
 */
PaymentRequest.prototype['destination'] = undefined;

/**
 * Custom reference for payment identifying
 * @member {String} reference
 */
PaymentRequest.prototype['reference'] = undefined;

/**
 * Request creation date expressed in UNIX timestamp
 * @member {Number} timestamp
 */
PaymentRequest.prototype['timestamp'] = undefined;

/**
 * Last update expressed in UNIX timestamp
 * @member {Number} lastupdate
 */
PaymentRequest.prototype['lastupdate'] = undefined;

/**
 * Status of the payment:    * `0: Idle` payment has not been paid    * `1: Incomplete` payment is being paid partially    * `2: Confirming` payment has been received completely but it's not confirmed by network yet    * `3: Confirmed` payment has been paid completely and it has at least `1` confirmation by network 
 * @member {Number} status
 */
PaymentRequest.prototype['status'] = undefined;

/**
 * `true` is there was a problem. `false` if not 
 * @member {Boolean} error
 */
PaymentRequest.prototype['error'] = undefined;






export default PaymentRequest;
