// -------------------------------------- Imports ------------------------------------ ***
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { SideNav } from "~/components/SideNav.components";

// ------------------------------ Constants Module Scope ----------------------------- ***
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// -------------------------------- Component Function ------------------------------- ***
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  // ------------------------------------- States ------------------------------------ ***
  const router = useRouter();

  // ----------------------------------- Constants ----------------------------------- ***
  const isLandingPage = router.asPath === "/";

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Head>
          <title>NoteDown AI</title>
        </Head>
        <div
          className={`${inter.variable} flex h-screen w-screen bg-white font-inter dark:bg-[#3B3B3E]`}
        >
          <div
            className={`${
              (!isLandingPage && "grid grid-cols-[250px_1fr]") || "w-full"
            }`}
          >
            {!isLandingPage && <SideNav />}
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
