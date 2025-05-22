---
sidebar_position: 2
---

# Exception Types

The library provides custom exceptions for handling different types of errors:

-  `TePayAuthenticationException` – Thrown when authentication fails. Includes `ErrorResponse` object.

-  `TePayValidationException` – Thrown when a request validation fails. Includes List of error messages.

-  `TePayApiException` – Thrown when an API error occurs. Includes `ErrorResponse` object

-  `TePaySerializationException` – Thrown when JSON serialization or deserialization fails.