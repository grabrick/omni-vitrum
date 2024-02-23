import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import Products from "@/components/UI/Products/Products";
import { productData } from "@/components/UI/Products/data/productsMap";

export default function ProductsPage() {
  const path = useRouter();
  const findCurrentProduct: any = productData.find(items => items.type === path.query.name)

  return (
    <>
      <Head>
        <title>{findCurrentProduct?.routeTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Products query={findCurrentProduct} />
      </Layout>
    </>
  );
}
