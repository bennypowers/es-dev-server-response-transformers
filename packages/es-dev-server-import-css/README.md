# `es-dev-server-import-css`

> Import CSS Files into your LitElement Components and serve them with [es-dev-server](http://npm.im/es-dev-server)

## Usage

### `es-dev-server.config.js`
```js
module.exports = {
  port: 8080,
  watch: true,
  nodeResolve: true,
  appIndex: 'demo/index.html',
  moduleDirs: ['node_modules', 'web_modules'],
  responseTransformers: [
    require('es-dev-server-import-css'),
  ],
};
```

### `lit-css.js`
```js
import { LitElement, html } from 'lit-element';
import style from './style.css';
export class LitCss extends LitElement {
  static get styles() { return style; }
  render() { return html`<p>😎</p>`; }
}
customElements.define('lit-css', LitCss);
```

### `style.css`
```css
:host { background: rebeccapurple; }
p { font-style: italic; }
```

### `demo/index.html`
```html
<script type="module" src="../lit-css.js"></script>
<lit-css></lit-css>
```

