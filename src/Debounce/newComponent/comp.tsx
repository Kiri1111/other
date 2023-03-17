import {ApolloClient, InMemoryCache} from "@apollo/client";


export const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {"Authorization": 'Bearer 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'},
    cache: new InMemoryCache()
})