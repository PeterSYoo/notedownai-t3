import { type AppType } from "next/app";
// -------------------------------------- Imports ------------------------------------ ***
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// -------------------------------- Component Function ------------------------------- ***
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Head>
          <title>NoteDown AI</title>
        </Head>
        <div
          className={`${inter.variable} min-w-screen flex min-h-screen flex-col bg-white font-inter dark:bg-[#3B3B3E]`}
        >
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
