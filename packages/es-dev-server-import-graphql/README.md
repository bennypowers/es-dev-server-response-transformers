# `es-dev-server-import-graphql`

> Import GraphQL into your modules serve them with [es-dev-server](http://npm.im/es-dev-server)

## Usage

### `es-dev-server.config.js`

```js
const graphql = require('es-dev-server-import-graphql');

module.exports = {
  port: 8080,
  watch: true,
  nodeResolve: true,
  appIndex: 'demo/index.html',
  moduleDirs: ['node_modules', 'web_modules'],
  plugins: [
    graphql()
  ],
};
```

### `index.js`

```js
import MoodQuery from './Mood.query.graphql';
import { ApolloQuery, customElement, html } from '@apollo-elements/lit-apollo';

interface Data {
  mood: string;
}

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

### `Mood.query.json`

```graphql
query MoodQuery {
  mood
}
```
