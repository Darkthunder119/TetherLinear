import { cacheExchange, createClient, fetchExchange } from 'urql';

const client = createClient({
    url: import.meta.env.VITE_GRAPHQL_URL,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => ({
        headers: {
            'content-type': 'application/json',
        },
    }),
});

export { client };
