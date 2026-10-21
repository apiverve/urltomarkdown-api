# URL to Markdown API - Ruby Gem

URL to Markdown converts any webpage URL into structured Markdown text. Each response delivers the page title, converted text, word count, and element counts, with paid plans adding optional link and image syntax.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_urltomarkdown'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_urltomarkdown
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_urltomarkdown'

# Initialize the client
client = APIVerve::Urltomarkdown::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  url: "https://example.com/",
  includeImages: true,
  includeLinks: true
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ url: "https://example.com/", includeImages: true, includeLinks: true })
  puts response["data"]
rescue APIVerve::Urltomarkdown::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Urltomarkdown::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Urltomarkdown::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/urltomarkdown?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/urltomarkdown?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/urltomarkdown?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
