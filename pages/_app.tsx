import "@/styles/base.css";
import "@/styles/global.css";
import "@/styles/utils.css";
import { createClient } from "@urql/core";
// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "next-themes";
import { Provider } from "urql";
// import { QueryClient, QueryClientProvider } from "react-query";

// const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  // const client = new ApolloClient({
  //   uri: "http://localhost:4000/graphql",
  //   cache: new InMemoryCache(),
  // });

  const client = createClient({
    url: "http://localhost:4000/graphql",
  });

  return (
    <Provider value={client}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
