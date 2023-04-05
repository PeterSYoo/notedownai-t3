import { type NextPage } from "next";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  // States ------------------------------------------------------------- ***
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  // JSX ----------------------------------------------------------------- ***
  return (
    <>
      <main className="flex h-full flex-grow flex-col items-center justify-center bg-gradient-to-b from-[#e6e5e7] to-[#6b6c6e]"></main>
    </>
  );
};

export default Home;
