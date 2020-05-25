import rollupJson from '@rollup/plugin-json'
import { wrapRollupPlugin } from 'es-dev-server-rollup';

export default function json(...opts) {
  return {
    ...wrapRollupPlugin(rollupJson(...opts)),

    resolveMimeType(context) {
      if (context.response.is(json))
        return 'js';
    }
  }
}