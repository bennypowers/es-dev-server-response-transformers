import rollupPluginGraphql from '@kocal/rollup-plugin-graphql';
import { wrapRollupPlugin } from 'es-dev-server-rollup';
import { createFilter } from 'rollup-pluginutils';
import type { Plugin } from 'es-dev-server';

type Opts = {
  include?: string | RegExp | (string | RegExp)[],
  exclude?: string | RegExp | (string | RegExp)[],
}

export default function graphql(opts: Opts): Plugin {
  const { include, exclude } = opts ?? {}
  const filter = createFilter(include, exclude);
  return {
    ...wrapRollupPlugin(rollupPluginGraphql(opts)),

    resolveMimeType(context) {
      if (filter(context.path) && context.path.endsWith('graphql') || context.path.endsWith('gql'))
        return 'js';
    }
  }
}
