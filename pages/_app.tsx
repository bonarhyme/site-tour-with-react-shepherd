import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import "@/styles/scss/style.scss";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ShepherdTour, useShepherdTour } from "react-shepherd";
import "shepherd.js/dist/css/shepherd.css";

const Tour = dynamic(() => import("../components/tour"), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Tour>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Tour>
  );
}
