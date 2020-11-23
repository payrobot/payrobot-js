# Payrobot.WalletSendRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | [**CryptoCurrency**](CryptoCurrency.md) |  | [optional] 
**walletId** | **String** | Unique ID of the new created Wallet | [optional] 
**requestId** | **String** | ID of this transaction, it can be used letter in the callback or to query it | [optional] 
**timestamp** | **Number** | Request creation date expressed in UNIX timestamp | [optional] 
**lastupdate** | **Number** | Last update expressed in UNIX timestamp | [optional] 
**amount** | **String** | Total amount sent from wallet | [optional] 
**callback** | **String** | Optional callback to notify your web / app as soon as the send request has been fully broadcasted to the network | [optional] 
**destination** | [**[AddressDetail]**](AddressDetail.md) | Array with all the destination coin addres(es) and the amount(s) to send  | [optional] 
**txid** | **String** | Tx Hash. *Only available in requests with confirmed status*  | [optional] 
**status** | **Number** | Status of this send request:   * &#x60;0: Queued&#x60; Request has been queued for broadcasting. It usually takes few seconds under normal conditions   * &#x60;1: Broadcasted&#x60; Request has been fully broadcasted to Bitcoin Network   | [optional] [default to 0]
**error** | **Boolean** | &#x60;true&#x60; is there was a problem. &#x60;false&#x60; if not  | [optional] 


