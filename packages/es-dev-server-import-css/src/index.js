export default function importCSS({ url, body }) {
  if (url.endsWith('.css')) {
    return {
      contentType: 'application/javascript',
      body: `import { css } from 'lit-element'; export default css\`${body}\``,
    };
  }
}


