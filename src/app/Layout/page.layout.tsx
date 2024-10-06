import Head from "next/head";
import React from "react";

interface PageLayoutInterface {
  title: string;
  description: string;
  children: React.ReactNode;
}

const PageLayout = (pageProps: PageLayoutInterface) => {
  return (
    <>
      <Head>
        <title>{pageProps.title ? `${pageProps.title}` : "Mero Ticket"}</title>
        {pageProps.description && (
          <meta name="description" content={pageProps.description} />
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {pageProps.children}
    </>
  );
};

export default PageLayout;
