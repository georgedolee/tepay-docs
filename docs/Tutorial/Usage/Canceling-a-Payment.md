---
sidebar_position: 3
---

# Canceling a Payment

Cancel a payment by specifying the original `payId`. Useful for full or partial refunds.

```csharp
var request = new CancelPaymentRequest
{
    Amount = 2,
    Extra = "GE42TB0000000000000000000000", // IBAN format for split transactions (optional)
    Extra2 = "10.50"  			    // Amount to be canceled for a split transaction (optional)
};

await service.CancelPaymentAsync("payId", request);
```