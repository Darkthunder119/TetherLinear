import { cacheExchange, createClient, fetchExchange } from 'urql';

const client = createClient({
    url: process.env.REACT_APP_GRAPHQL_URL,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => ({
        headers: {
            'content-type': 'application/json',
        },
    }),
});

export { client };
