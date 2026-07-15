/**
 * URL to Markdown API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the URL to Markdown API.
 * API Documentation: https://docs.apiverve.com/ref/urltomarkdown
 */

const API_KEY = process.env.APIVERVE_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.apiverve.com/v1/urltomarkdown';

/**
 * Make a POST request to the URL to Markdown API
 */
async function callURLtoMarkdownAPI() {
  try {
    // Request body
    const requestBody &#x3D; {
    &quot;url&quot;: &quot;https://example.com/blog/getting-started&quot;,
    &quot;includeImages&quot;: true,
    &quot;includeLinks&quot;: true
};

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.status === 'ok') {
      console.log('✓ Success!');
      console.log('Response data:', data.data);
      return data.data;
    } else {
      console.error('✗ API Error:', data.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('✗ Request failed:', error.message);
    return null;
  }
}

// Run the example
callURLtoMarkdownAPI()
  .then(result => {
    if (result) {
      console.log('\n📊 Final Result:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
