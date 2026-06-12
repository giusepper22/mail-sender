const axios = require('axios');
const { JSDOM } = require('jsdom');

const fetchContent = async (url) => {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const html = response.data;

    // Extract readable content from HTML
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Remove script and style tags
    document.querySelectorAll('script, style').forEach((el) => el.remove());

    // Try to get main content
    let content = '';

    // Look for common content containers
    const selectors = [
      'article',
      'main',
      '[role="main"]',
      '.content',
      '.post',
      '.article',
      'body',
    ];

    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        content = element.textContent.trim();
        break;
      }
    }

    // Fallback to body text
    if (!content) {
      content = document.body.textContent.trim();
    }

    // Limit content to 5000 characters for email
    if (content.length > 5000) {
      content = content.substring(0, 5000) + '\n\n[Content truncated...]';
    }

    return content || null;
  } catch (error) {
    console.error('Error fetching content:', error.message);
    return null;
  }
};

module.exports = { fetchContent };
