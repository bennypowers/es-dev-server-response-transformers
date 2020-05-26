import rollupLitcss from 'rollup-plugin-lit-css';
import { wrapRollupPlugin } from 'es-dev-server-rollup';
import { createFilter } from "rollup-pluginutils";
import type { Plugin } from 'es-dev-server';

type Opts = Parameters<typeof rollupLitcss>[0];

export default function litcss(opts: Opts): Plugin {
  const {include, exclude} = opts ?? {};
  const filter = createFilter(include, exclude)
  return {
    ...wrapRollupPlugin(rollupLitcss(opts)),

    resolveMimeType(context) {
      if (filter(context.path) && context.response.is('css'))
        return 'js';
    }
  }
}