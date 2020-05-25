import rollupPluginGraphql from '@kocal/rollup-plugin-graphql';
import { wrapRollupPlugin } from 'es-dev-server-rollup';

export default function graphql(...opts) {
  return {
    ...wrapRollupPlugin(rollupPluginGraphql(...opts)),

    resolveMimeType(context) {
      if (context.path.endsWith('graphql') || context.path.endsWith('gql'))
        return 'js';
    }
  }
}
