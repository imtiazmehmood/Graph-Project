import { useState } from "react";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Clients } from "./components";
import AddClient from "./components/AddClient";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
function App() {
  const client = new ApolloClient({
    uri: "http://localhost:9000/graphql",
    cache: cache, //new InMemoryCache(),
  });

  const [visible, setVisible] = useState(false);
  return (
    <>
      <ApolloProvider client={client}>
        <div className="App">
          <Clients />
          <AddClient visible={visible} />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
