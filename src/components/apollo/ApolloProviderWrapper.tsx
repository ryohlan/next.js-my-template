import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, createHttpLink } from '@apollo/client'
import { AuthorizationTokenStore } from '../../stores/AuthorizationTokenStore'

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  link: ApolloLink.from([
    createHttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      fetch: async (uri, options) => {
        const accessToken = await AuthorizationTokenStore.getAccessToken()
        const headers = { Authorization: `Bearer ${accessToken}` }
        if (options) {
          Object.assign(options.headers, headers)
          return fetch(uri, options)
        } else {
          return fetch(uri, { headers })
        }
      },
    }),
  ]),
  cache,
})

export const ApolloProviderWrapper: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
