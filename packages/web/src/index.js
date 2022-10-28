import ApolloClient from 'apollo-boost'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import App from './App'

const GRAPHQL_API_URL = 'http://localhost:8080/graphql'

const client = new ApolloClient({
  clientState: {
    resolvers: {
      Query: {
        localHello(obj, { subject }) {
          return `Hello, ${subject}! from Web UI`
        }
      }
    }
  },
  uri: GRAPHQL_API_URL
})

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="transactions" element={<App />} />
        <Route path="explore" element={<App />} />
        <Route path="spaces" element={<App />} />
        <Route path="actions" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)