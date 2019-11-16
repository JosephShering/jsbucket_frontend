import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fab, faTwitter} from '@fortawesome/free-brands-svg-icons';

import '../css/global.css';

library.add(
    fab,
    faTwitter
);

const client = new ApolloClient({
    uri: `https://localhost:3000`,
    fetch
});

export const wrapRootElement = ({element}) => (
    <ApolloProvider client={client}>
        {element}
    </ApolloProvider>
)