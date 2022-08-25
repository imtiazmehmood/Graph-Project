import logo from "./logo.svg";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Clients } from "./components";
function App() {
  const client = new ApolloClient({
    uri: "http://localhost:9000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <div className="App">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
