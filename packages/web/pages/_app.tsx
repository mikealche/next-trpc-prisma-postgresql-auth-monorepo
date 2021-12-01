import "../styles/globals.css";
import type { AppProps } from "next/app";
import APIProvider from "../api/APIProvider";
import { AuthProvider } from "../contexts/auth";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <APIProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </APIProvider>
      <Toaster />
    </>
  );
}

export default MyApp;
