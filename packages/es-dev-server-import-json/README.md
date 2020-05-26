# `es-dev-server-import-json`

> Import JSON into your modules serve them with [es-dev-server](http://npm.im/es-dev-server)

## Usage

### `es-dev-server.config.js`

```js
const json = require('es-dev-server-import-json');

module.exports = {
  port: 8080,
  watch: true,
  nodeResolve: true,
  appIndex: 'demo/index.html',
  moduleDirs: ['node_modules', 'web_modules'],
  plugins: [
    json()
  ],
};
```

### `index.js`

```js
import data from './data.json';
export data.map(item => item.toUpperCase()).join(' ') + '!';
```

### `data.json`

```json
[
  "es-dev-server",
  "is good for you"
]
```
