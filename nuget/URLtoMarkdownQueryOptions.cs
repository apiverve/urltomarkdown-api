using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.URLtoMarkdown
{
    /// <summary>
    /// Query options for the URL to Markdown API
    /// </summary>
    public class URLtoMarkdownQueryOptions
    {
        /// <summary>
        /// The URL of the webpage to convert to Markdown
        /// </summary>
        [JsonProperty("url")]
        public string Url { get; set; }

        /// <summary>
        /// Whether to include image references in the Markdown output
        /// </summary>
        [JsonProperty("includeImages")]
        public bool? IncludeImages { get; set; }

        /// <summary>
        /// Whether to include hyperlinks in the Markdown output
        /// </summary>
        [JsonProperty("includeLinks")]
        public bool? IncludeLinks { get; set; }
    }
}
