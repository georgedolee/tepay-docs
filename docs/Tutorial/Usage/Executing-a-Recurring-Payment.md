---
sidebar_position: 5
---

# Executing a Recurring Payment

Trigger a charge using a previously saved `RecID`.

```csharp
var request = new ExecuteRecurringPaymentRequest
{
    Money = new Money
    {
        Amount = 10,
        Currency = "GEL",
    },
    RecID = "rec_id",
};

await service.ExecuteRecurringPaymentAsync(request);
```