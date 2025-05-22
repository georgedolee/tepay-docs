---
sidebar_position: 4
---

# Completing a Pre-Authorized Payment

If you've pre-authorized a payment, you can finalize it with the amount to be captured:

```csharp
decimal amount = 100;
var response = await service.CompletePreAuthPaymentAsync("payId", amount);
```