import rollupJson from '@rollup/plugin-json'
import { wrapRollupPlugin } from 'es-dev-server-rollup';
import { createFilter } from "rollup-pluginutils";
import type { Plugin } from 'es-dev-server';

type Opts = Parameters<typeof rollupJson>[0];

export default function json(opts: Opts): Plugin {
  const {include, exclude} = opts ?? {};
 // @ts-expect-error
  const filter = createFilter(include, exclude)
  return {
    ...wrapRollupPlugin(rollupJson(opts)),

    resolveMimeType(context) {
      if (filter(context.path) && context.response.is('json'))
        return 'js';
    }
  }
}