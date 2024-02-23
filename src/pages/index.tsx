import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import VideoPlayer from "@/components/UI/VideoPlayer/VideoPlayer";
import MinAbout from "@/components/UI/MinAbout/MinAbout";
import MinProducts from "@/components/UI/MinProducts/MinProducts";
import Submit from "@/components/UI/Submit/Submit";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Главная</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <VideoPlayer />
        <MinAbout />
        <MinProducts />
        <Submit />
      </Layout>
    </>
  );
}
