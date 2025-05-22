---
sidebar_position: 1
---

# Error Response

When an error occurs, the API provides an `ErrorResponse` object with details about the error.

Here is the structure of the ErrorResponse:

```csharp
public class ErrorResponse
{
    public string? Type { get; set; }

    public string? Title { get; set; }

    public int? Status { get; set; }

    public string? Detail { get; set; }

    public string? SystemCode { get; set; }

    public string? Code { get; set; }

    public string? ResultCode { get; set; }

    public string? TraceId { get; set; }
}
```