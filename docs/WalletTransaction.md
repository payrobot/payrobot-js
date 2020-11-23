# Payrobot.WalletTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Amount of the transaction:   * &#x60;Negative number (&lt; 0)&#x60; is a withdrawal   * &#x60;Positive number (&gt; 0)&#x60; is a deposit  | [optional] 
**addresses** | [**[AddressDetail]**](AddressDetail.md) | Address(es) involved:   * &#x60;payments&#x60; address(es) where payment was received   * &#x60;withdrawals&#x60; address(es) where funds were sent  | [optional] 
**timestamp** | **Number** | Timestamp of the transaction expressed in &#x60;Unix Timestamp&#x60; | [optional] 


