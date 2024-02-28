import CalculateBtn from "@/components/UI/shared/CalculateBtn/CalculateBtn";
import "@/styles/globals.scss";
import "@/styles/fonts.scss"
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            backgroundColor: '#5F85DB',
            boxShadow: '0px 5px 30px #516BB7',
            color: '#fff'
          }
        }}
      />
      <CalculateBtn />
      <Component {...pageProps} />
    </>
  );
}
