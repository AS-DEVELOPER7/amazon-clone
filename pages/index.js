import Head from "next/head";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>AMAZON</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen-2xl mx-auto  lg:px-24 ">
        {/* banner */}
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: { products },
  };
}
