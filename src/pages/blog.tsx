import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Blog from "@/components/UI/Blog/Blog";
import ImagesSlider from "@/components/UI/ImagesSlider/ImagesSlider";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Блог</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="48x48" href="/favicon.ico" />
      </Head>
      <Layout>
        <Blog />
        <ImagesSlider />
      </Layout>
    </>
  );
}
