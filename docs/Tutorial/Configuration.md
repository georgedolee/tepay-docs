---
sidebar_position: 3
---

# Configuration

Before using TePay, configure the API credentials:

```csharp
var config = new TePayConfig
{
    BaseUrl = "https://api.tbcbank.ge/",   // default
    Version = "v1",                        // default
    ApiKey = "your-api-key",
    ClientId = "your-client-id",
    ClientSecret = "your-client-secret"
};
```

Instantiate `TePayService` with the configuration 

```csharp
ITePayService  tePayService = new  TePayService(config);
```