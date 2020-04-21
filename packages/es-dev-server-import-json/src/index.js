export default function importJSON({ url, body }) {
  if (url.endsWith('.json')) {
    return {
      body: `export default ${body}`,
      contentType: 'application/javascript',
    };
  }
}