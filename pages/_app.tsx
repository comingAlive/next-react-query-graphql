import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </Hydrate>
  </QueryClientProvider>
);

export default MyApp;
