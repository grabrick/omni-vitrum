import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Navigate from "@/components/UI/Navigate/Navigate";
import { useWindowSize } from "@/helpers/useWindowSize";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NavigatePage() {
  const { width } = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    if (width && width > 839) {
      router.push('/')
    }
  }, [width])
  
  return (
    <>
      <Head>
        <title>Продукция и Услуги</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navigate />
      </Layout>
    </>
  );
}
