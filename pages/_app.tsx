import "@/styles/base.css";
import "@/styles/global.css";
import "@/styles/utils.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
