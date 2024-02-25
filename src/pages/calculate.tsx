import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Contacts from "@/components/UI/Contacts/Contacts";
import Calculate from "@/components/UI/Calculate/Calculate";

export default function CalculatePage() {
  return (
    <>
      <Head>
        <title>Калькулятор</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Calculate />
      </Layout>
    </>
  );
}
