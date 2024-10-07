import { AppProps } from "next/app";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import RootLayout from "../app/Layout/layout";
import { store } from "../redux/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "../app/globals.css";
// import PageLoader from "../components/PageLoader/PageLoader";
import { AuthProvider } from "../context/AuthContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      placeholderData: (prev: any) => prev,
    },
  },
});

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   const handleStart = () => setIsLoading(true);
  //   const handleComplete = () => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   };

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // }, [router]);

  const isSpecialPage = ["Login", "Register"].includes(Component.name);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Toaster />
          {isSpecialPage ? (
            <Component {...pageProps} />
          ) : (
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          )}
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
