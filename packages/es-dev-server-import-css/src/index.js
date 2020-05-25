import rollupLitcss from 'rollup-plugin-lit-css';
import { wrapRollupPlugin } from 'es-dev-server-rollup';

export default function litcss(...opts) {
  return {
    ...wrapRollupPlugin(rollupLitcss(...opts)),

    resolveMimeType(context) {
      if (context.response.is('css'))
        return 'js';
    }
  }
}
