import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Contacts from "@/components/UI/Contacts/Contacts";

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Контакты</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="48x48" href="/favicon.ico" />
      </Head>
      <Layout>
        <Contacts />
      </Layout>
    </>
  );
}
