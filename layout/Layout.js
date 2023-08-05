import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Bio from "../components/Bio";

const Layout = ({ children, home, active }) => {
  const description =
    "Hi, I'm Eze Emmanuel, your go-to Frontend Developer for creating solid and scalable frontend products with exceptional user experiences.";
  return (
    <React.Fragment>
      <Head>
        <meta name="author" content="Eze Emmanuel" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/thumbnail.png" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div
        className={`lg:h-full lg:overflow-hidden h-auto ${
          home ? "h-full" : ""
        }`}
      >
        <div className="lg:hidden flex flex-col justify-between px-[5%] h-full">
          <Header />
          <div className="relative ">{home ? <Bio /> : children}</div>
        </div>
        <div className="flex bg-[#161616] min-h-screen desk_layout">
          <div className="w-4/12 m-auto ">
            <Bio />
          </div>
          <div className="w-6/12 mx-auto">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
