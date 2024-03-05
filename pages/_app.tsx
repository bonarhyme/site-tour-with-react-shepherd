import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import "@/styles/scss/style.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
