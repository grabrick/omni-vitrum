import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import About from "@/components/UI/About/About";
import ImagesSlider from "@/components/UI/ImagesSlider/ImagesSlider";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>О компании</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="48x48" href="/favicon.ico" />
      </Head>
      <Layout>
        <About />
        <ImagesSlider />
      </Layout>
    </>
  );
}
