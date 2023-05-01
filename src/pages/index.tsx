import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Layout } from "@/components/Layout";
import { Main } from "@/components/Main";
import { Seo } from "@/components/Seo";
// import { Seo } from "@/components/Seo";
import { Technologies } from "@/components/Technologies";
import type { NextPage } from "next";
// eslint-disable-next-line @next/next/no-document-import-in-page
// import { Main } from "next/document";

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <Main />
        <About />
        <Technologies />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
