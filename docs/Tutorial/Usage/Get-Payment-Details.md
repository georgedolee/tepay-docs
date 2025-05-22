---
sidebar_position: 2
---

# Get Payment Details

Retrieve detailed info about a previously created payment using its unique `payId`.

```csharp
var response = await service.GetPaymentDetailsAsync("payId");
```