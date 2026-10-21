# URL to Markdown API - PHP Package

URL to Markdown converts any webpage URL into structured Markdown text. Each response delivers the page title, converted text, word count, and element counts, with paid plans adding optional link and image syntax.

## Installation

Install via Composer:

```bash
composer require apiverve/urltomarkdown
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Urltomarkdown\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'url' => 'https://example.com/',
    'includeImages' => true,
    'includeLinks' => true
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Urltomarkdown\Client;
use APIVerve\Urltomarkdown\Exceptions\APIException;
use APIVerve\Urltomarkdown\Exceptions\ValidationException;

try {
    $response = $client->execute(['url' => 'https://example.com/', 'includeImages' => true, 'includeLinks' => true]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "url": "https://example.com/",
    "title": "Example Domain",
    "markdown": "# Example Domain\n\n\nThis domain is for use in documentation examples without needing permission. Avoid use in operations.\n\n\n[Learn more](https://iana.org/domains/example)",
    "wordCount": 20,
    "imageCount": 0,
    "linkCount": 1
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/urltomarkdown?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/urltomarkdown?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/urltomarkdown?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
