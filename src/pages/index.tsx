import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/Navbar";
import Showcase from "@/Components/SHowcase";
import Categors from "@/Components/Categors";
import Sponsir from "@/Components/Sponsir";
import Categ from "@/Components/Categ";
import Latest from "@/Components/Latest";
import Products from "@/Components/Products";
import Baner from "@/Components/Baner";
import Webinars from "@/Components/Webinars";
import Testimonals from "@/Components/Testimonals";
import Blogs from "@/Components/Blogs";
import Footer from "@/Components/Footer";
import Map from "@/Components/Map";
import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <Head>
        <title>Babymom</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/green_babypictfootprints_1484334959-1.png"
        />
      </Head>
      <main>
        <Navbar />
        <Showcase />
        <Categors />
        <Sponsir />
        <Categ />
        <Latest />
        <Products />
        <Baner />
        <Webinars />
        <Testimonals />
        <Blogs />
        <Map />
        <Footer />
      </main>
    </>
  );
}

// export async function getStaticProps({ locale }: GetStaticPropsContext) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale as string, ["common"])),
//       locale,
//     },
//   };
// }