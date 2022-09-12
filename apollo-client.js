import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://penapolis.stepzen.net/api/wishing-mastiff/__graphql",
    headers: {
        Authorization: ` ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    },
    cache: new InMemoryCache(),
});

export default client;