import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';

const client = new ApolloClient({
    uri: `https://localhost:3000`,
    fetch
})

export const wrapRootElement = ({element}) => (
    <ApolloProvider client={client}>
        {element}
    </ApolloProvider>
)