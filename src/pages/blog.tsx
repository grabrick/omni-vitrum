import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Blog from "@/components/UI/Blog/Blog";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Блог</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Blog />
      </Layout>
    </>
  );
}
