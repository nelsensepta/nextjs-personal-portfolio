import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Nelsen Septa",
  image: "https://uygar.xyz/me.jpeg",
  jobTitle: "Software Developer",
  url: "https://uygar.xyz/",
  sameAs: [
    "https://www.linkedin.com/in/nelsensepta/",
    "https://github.com/nelsensepta",
    "https://www.instagram.com/nelsensepta/",
  ],
};

export const Seo = () => {
  return (
    <Head>
      <title>Nelsen Septa</title>
      <meta charSet={"UTF-8"} />
      <meta name="title" content="Nelsen Septa" />
      <meta
        name="description"
        content="Hi there, I'm Nelsen Septa &mdash; a full-stack web application developer from Central Java, Indonesia."
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://uygar.xyz/" />
      <meta property="og:title" content="Nelsen Septa" />
      <meta
        property="og:description"
        content="Hi there, I'm Nelsen Septa &mdash; a full-stack web application developer from Central Java, Indonesia."
      />
      <meta property="og:image" content="https://uygar.xyz/me.jpeg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://uygar.xyz/" />
      <meta property="twitter:title" content="Uygar Uğurlu" />
      <meta
        property="twitter:description"
        content="Hi there, I'm Nelsen Septa &mdash; a full-stack web application developer from Central Java, Indonesia."
      />
      <meta property="twitter:image" content="https://uygar.xyz/me.jpeg" />
      <meta
        name="google-site-verification"
        content="7zd-Cop1OZgN918aNRzjgRHcTQDAqXl31vFy0DGjifo"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};
