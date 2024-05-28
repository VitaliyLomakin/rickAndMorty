import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { BrowserRouter } from 'react-router-dom';

import RootStore from './stores/rootStore';
import { RootStoreContext } from './context/root-store-context';

const client = new ApolloClient({
   uri: 'https://rickandmortyapi.com/graphql',
   cache: new InMemoryCache(),
   connectToDevTools: true,
});

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement,
);
root.render(
   <React.StrictMode>
      <ApolloProvider client={client}>
         <RootStoreContext.Provider value={new RootStore()}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </RootStoreContext.Provider>
      </ApolloProvider>
   </React.StrictMode>,
);
