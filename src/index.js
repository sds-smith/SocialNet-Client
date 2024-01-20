import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './utils/graphql/apollo-client';
import { UserProvider } from './context/user-context';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={apolloClient}>
        <UserProvider>
            <App />
        </UserProvider>
    </ApolloProvider>
);