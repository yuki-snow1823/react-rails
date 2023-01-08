import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { Sample } from "./sample";

// 解説します（★１）
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

// 解説します（★2）
export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Sample />
    </ApolloProvider>
  );
};
