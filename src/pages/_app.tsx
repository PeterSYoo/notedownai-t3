import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  // JSX ------------------------------------------------------------------ ***
  return (
    <SessionProvider session={session}>
      <Head>
        <title>NoteDown AI</title>
      </Head>
      <div
        className={`${inter.variable} min-w-screen flex min-h-screen flex-col font-inter`}
      >
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
