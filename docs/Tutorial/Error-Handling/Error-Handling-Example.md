---
sidebar_position: 3
---

# Error Handling Example

This example demonstrates how to handle various exceptions that can occur while using the `TePayService`. It shows how to catch and respond to authentication errors, API issues, validation problems, and unexpected failures.

```csharp
try
{
	var  payment = await  tePayService.CreatePaymentAsync(request);
}
catch (TePayAuthenticationException  ex)
{
	var errorResponse = ex.ErrorResponse;
	Console.WriteLine("Authentication Error: " + errorResponse.Title);
}
catch (TePayApiException  ex)
{
	var errorResponse = ex.ErrorResponse;
	Console.WriteLine("API Error: " + errorResponse.Title);
}
catch (TePayValidationException ex)
{
	foreach (var error in ex.Errors)
	{
		Console.WriteLine($"Error: {error}");
	}
	Console.WriteLine("Validation Error: " + ex.Message);
}
catch (Exception  ex)
{
	Console.WriteLine("Unexpected Error: " + ex.Message);
}
```