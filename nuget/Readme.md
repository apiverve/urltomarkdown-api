URLtoMarkdown API
============

URL to Markdown is a powerful tool for converting any webpage into clean, readable Markdown format. It preserves the document structure including headings, links, lists, and images.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a .NET Wrapper for the [URLtoMarkdown API](https://apiverve.com/marketplace/urltomarkdown?utm_source=nuget&utm_medium=readme)

---

## Installation

Using the .NET CLI:
```
dotnet add package APIVerve.API.URLtoMarkdown
```

Using the Package Manager:
```
nuget install APIVerve.API.URLtoMarkdown
```

Using the Package Manager Console:
```
Install-Package APIVerve.API.URLtoMarkdown
```

From within Visual Studio:

1. Open the Solution Explorer
2. Right-click on a project within your solution
3. Click on Manage NuGet Packages
4. Click on the Browse tab and search for "APIVerve.API.URLtoMarkdown"
5. Click on the APIVerve.API.URLtoMarkdown package, select the appropriate version in the right-tab and click Install

---

## Configuration

Before using the urltomarkdown API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=nuget&utm_medium=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```csharp
using System;
using APIVerve.API.URLtoMarkdown;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize the API client
        var apiClient = new URLtoMarkdownAPIClient("[YOUR_API_KEY]");

        var queryOptions = new URLtoMarkdownQueryOptions {
    url = "https://example.com/blog/getting-started",
    includeImages = true,
    includeLinks = true
};

        // Make the API call
        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                // Access response data using the strongly-typed ResponseObj properties
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
```

---

## Usage

The URLtoMarkdown API documentation is found here: [https://docs.apiverve.com/ref/urltomarkdown](https://docs.apiverve.com/ref/urltomarkdown?utm_source=nuget&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

###### Authentication
URLtoMarkdown API uses API Key-based authentication. When you create an instance of the API client, you can pass your API Key as a parameter.

```csharp
// Create an instance of the API client
var apiClient = new URLtoMarkdownAPIClient("[YOUR_API_KEY]");
```

---

## Usage Examples

### Basic Usage (Async/Await Pattern - Recommended)

The modern async/await pattern provides the best performance and code readability:

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.URLtoMarkdown;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new URLtoMarkdownAPIClient("[YOUR_API_KEY]");

        var queryOptions = new URLtoMarkdownQueryOptions {
    url = "https://example.com/blog/getting-started",
    includeImages = true,
    includeLinks = true
};

        var response = await apiClient.ExecuteAsync(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

### Synchronous Usage

If you need to use synchronous code, you can use the `Execute` method:

```csharp
using System;
using APIVerve.API.URLtoMarkdown;

public class Example
{
    public static void Main(string[] args)
    {
        var apiClient = new URLtoMarkdownAPIClient("[YOUR_API_KEY]");

        var queryOptions = new URLtoMarkdownQueryOptions {
    url = "https://example.com/blog/getting-started",
    includeImages = true,
    includeLinks = true
};

        var response = apiClient.Execute(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

---

## Error Handling

The API client provides comprehensive error handling. Here are some examples:

### Handling API Errors

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.URLtoMarkdown;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new URLtoMarkdownAPIClient("[YOUR_API_KEY]");

        var queryOptions = new URLtoMarkdownQueryOptions {
    url = "https://example.com/blog/getting-started",
    includeImages = true,
    includeLinks = true
};

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            // Check for API-level errors
            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
                Console.WriteLine($"Status: {response.Status}");
                return;
            }

            // Success - use the data
            Console.WriteLine("Request successful!");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
        catch (ArgumentException ex)
        {
            // Invalid API key or parameters
            Console.WriteLine($"Invalid argument: {ex.Message}");
        }
        catch (System.Net.Http.HttpRequestException ex)
        {
            // Network or HTTP errors
            Console.WriteLine($"Network error: {ex.Message}");
        }
        catch (Exception ex)
        {
            // Other errors
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

### Comprehensive Error Handling with Retry Logic

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.URLtoMarkdown;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new URLtoMarkdownAPIClient("[YOUR_API_KEY]");

        // Configure retry behavior (max 3 retries)
        apiClient.SetMaxRetries(3);        // Retry up to 3 times (default: 0, max: 3)
        apiClient.SetRetryDelay(2000);     // Wait 2 seconds between retries

        var queryOptions = new URLtoMarkdownQueryOptions {
    url = "https://example.com/blog/getting-started",
    includeImages = true,
    includeLinks = true
};

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed after retries: {ex.Message}");
        }
    }
}
```

---

## Advanced Features

### Custom Headers

Add custom headers to your requests:

```csharp
var apiClient = new URLtoMarkdownAPIClient("[YOUR_API_KEY]");

// Add custom headers
apiClient.AddCustomHeader("X-Custom-Header", "custom-value");
apiClient.AddCustomHeader("X-Request-ID", Guid.NewGuid().ToString());

var queryOptions = new URLtoMarkdownQueryOptions {
    url = "https://example.com/blog/getting-started",
    includeImages = true,
    includeLinks = true
};

var response = await apiClient.ExecuteAsync(queryOptions);

// Remove a header
apiClient.RemoveCustomHeader("X-Custom-Header");

// Clear all custom headers
apiClient.ClearCustomHeaders();
```

### Request Logging

Enable logging for debugging:

```csharp
var apiClient = new URLtoMarkdownAPIClient("[YOUR_API_KEY]", isDebug: true);

// Or use a custom logger
apiClient.SetLogger(message =>
{
    Console.WriteLine($"[LOG] {DateTime.Now:yyyy-MM-dd HH:mm:ss} - {message}");
});

var queryOptions = new URLtoMarkdownQueryOptions {
    url = "https://example.com/blog/getting-started",
    includeImages = true,
    includeLinks = true
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Retry Configuration

Customize retry behavior for failed requests:

```csharp
var apiClient = new URLtoMarkdownAPIClient("[YOUR_API_KEY]");

// Set retry options
apiClient.SetMaxRetries(3);           // Retry up to 3 times (default: 0, max: 3)
apiClient.SetRetryDelay(1500);        // Wait 1.5 seconds between retries (default: 1000ms)

var queryOptions = new URLtoMarkdownQueryOptions {
    url = "https://example.com/blog/getting-started",
    includeImages = true,
    includeLinks = true
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Dispose Pattern

The API client implements `IDisposable` for proper resource cleanup:

```csharp
var queryOptions = new URLtoMarkdownQueryOptions {
    url = "https://example.com/blog/getting-started",
    includeImages = true,
    includeLinks = true
};

using (var apiClient = new URLtoMarkdownAPIClient("[YOUR_API_KEY]"))
{
    var response = await apiClient.ExecuteAsync(queryOptions);
    Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
}
// HttpClient is automatically disposed here
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "url": "https://example.com/blog/getting-started",
    "title": "Getting Started Guide",
    "markdown": "# Getting Started Guide\n\nWelcome to our platform. This guide will help you get up and running quickly.\n\n## Prerequisites\n\nBefore you begin, make sure you have:\n\n- A registered account\n- API credentials\n- Node.js 18 or higher\n\n## Installation\n\nInstall the package using npm:\n\n```\nnpm install example-sdk\n```\n\n## Quick Start\n\nHere's a simple example to get you started:\n\n1. Import the SDK\n2. Initialize with your API key\n3. Make your first request\n\n## Next Steps\n\nCheck out our [documentation](https://example.com/docs) for more details.\n\n![Example Screenshot](https://example.com/images/screenshot.png)",
    "wordCount": 87,
    "imageCount": 1,
    "linkCount": 1
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=nuget&utm_medium=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=nuget&utm_medium=readme) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
