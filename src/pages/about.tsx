import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import About from "@/components/UI/About/About";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>О компании</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
}
