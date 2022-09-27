import Head from "next/head";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="twitter clone" content="Created by eason nong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        {/* Side bar */}
        <Sidebar />

        {/* Feed */}

        {/* Widgets */}
      </body>
    </div>
  );
}
