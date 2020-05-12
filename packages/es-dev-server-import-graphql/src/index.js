import rollupPluginGraphql from '@kocal/rollup-plugin-graphql';
const contentType = 'application/javascript';
const { transform } = rollupPluginGraphql();
const importGraphQL = function importGraphQL({ url, body }) {
    if (url.endsWith('graphql') || url.endsWith('gql')) {
        const { code } = transform(body, url);
        return { body: code, contentType };
    }
};
export default importGraphQL;
