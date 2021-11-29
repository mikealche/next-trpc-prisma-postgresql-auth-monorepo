import "../styles/globals.css";
import type { AppProps } from "next/app";
import APIProvider from "../api/APIProvider";
import { AuthProvider } from "../contexts/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <APIProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </APIProvider>
  );
}

export default MyApp;
