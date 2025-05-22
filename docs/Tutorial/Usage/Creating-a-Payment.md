---
sidebar_position: 1
---

# Creating a Payment


## Minimal request sample

A basic example to initiate a standard card payment:

```csharp
var request = new CreatePaymentRequest
{
		Amount = new Amount
    {
        Currency = "GEL",
        Total = 1,
    },
    ReturnUrl = "https://test.ge/ReturnURL",
    CallbackUrl = "https://test.ge/CallbackURL",
    PreAuth = false,
    Language = "EN",
    MerchantPaymentId = "P123123",
    Description = "Test Description"
};

var response = await service.CreatePaymentAsync(request);
```

## Extended request sample

Use this version when working with installment options, saved cards, and more advanced controls:

```csharp
var request = new CreatePaymentRequest
{
    Amount = new Amount
    {
        Currency = "GEL",
        Total = 1,
        SubTotal = 0,
        Tax = 0,
        Shipping = 0
    },
    ReturnUrl = "https://test.ge/ReturnURL",
    Extra = "GE60TB4572261006330008",
    UserIpAddress = "127.0.0.1",
    ExpirationMinutes = 12,
    Methods = new List<PaymentMethod>
    {
        PaymentMethod.Pan,
        PaymentMethod.InternetBankLogin,
        PaymentMethod.Installment
    },
    InstallmentProducts = new List<InstallmentProduct>
    {
        new InstallmentProduct
        {
            Name = "t1",
            Price = 100,
            Quantity = 1
        },
        new InstallmentProduct
        {
            Name = "t1",
            Price = 50,
            Quantity = 1
        },
        new InstallmentProduct
        {
            Name = "t1",
            Price = 50,
            Quantity = 1
        }
    },
    CallbackUrl = "https://test.ge/CallbackURL",
    PreAuth = false,
    Language = "KA",
    MerchantPaymentId = "P123123",
    SaveCard = true,
    SaveCardToDate = "1030",
    Description = "Test Description"
};

var response = await service.CreatePaymentAsync(request);
```