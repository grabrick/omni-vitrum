import Head from "next/head";
import Scene from "@/components/UI/NotFound/Scene/Scene";


export default function UndefinedPage() {
  return (
    <>
      <Head>
        <title>Страница не найдена</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="48x48" href="/favicon.ico" />
      </Head>
      <Scene />
    </>
  );
}
