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

          <AddClient visible={visible} setVisible={setVisible} />
          <div
            className="flex flex-row justify-between items-center w-full h-96 bg-slate-500"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="flex-row justify-between items-center">
              <button
                onClick={() => setVisible(!visible)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Add Client
              </button>

              <button
                onClick={() => {}}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Update Client
              </button>
            </div>
          </div>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
