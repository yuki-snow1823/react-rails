import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { Sample } from "./sample";

// 解説します（★１）
const client = new ApolloClient({
  uri: "https://railsapiyuki.herokuapp.com/graphql",
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
