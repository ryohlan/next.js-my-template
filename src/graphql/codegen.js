require('dotenv').config()

module.exports = {
  schema: [{ [process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT]: { headers: {} } }],
  overwrite: true,
  documents: 'src/**/*.gql',
  generates: {
    'src/graphql/generated/types.ts': ['typescript'],
    'src/graphql/generated/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
    'src/graphql/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
