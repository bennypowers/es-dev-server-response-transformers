# Plugins for `es-dev-server`

These let you import non-standard file types while running [es-dev-server](https://github.com/open-wc/open-wc)

## [import-css](./packages/es-dev-server-import-css)
```js
import { LitElement, html } from 'lit-element';

import style from './style.css';

export class LitCss extends LitElement {
  static get styles() { return style; }
  render() { return html`<p>😎</p>`; }
}

customElements.define('lit-css', LitCss);
```

## [import-json](./packages/es-dev-server-import-json)
```js
import data from './data.json';
export data.map(item => item.toUpperCase()).join(' ') + '!';
```
```json
[
  "es-dev-server",
  "is good for you"
]
```

## [import-graphql](./packages/es-dev-server-import-graphql)
```ts
import MoodQuery from './Mood.query.graphql';
import { ApolloQuery, customElement, html } from '@apollo-elements/lit-apollo';

interface Data { mood: string; }

@customElement('mood-query')
export class MoodQuery extends ApolloQuery<Data, null> {
  query = MoodQuery
  render() {
    return (
        this.error ? html`<p>Error is ${this.error}</p>`
      : this.data ? html`<p>Mood is ${this.data.mood}</p>`
      : ''
    );
  }
}
```
