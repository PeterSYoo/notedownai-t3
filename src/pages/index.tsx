import { type NextPage } from "next";
import { TabsContainer } from "~/components/landing-page/TabsContainer";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  // States ------------------------------------------------------------------------ ***
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  // JSX --------------------------------------------------------------------------- ***
  return (
    <>
      <main className="flex h-full w-full flex-grow bg-gradient-to-tr from-[#2A2B2E] to-[#3E3E42]">
        <div className="flex flex-grow bg-[url('https://res.cloudinary.com/dryh1nvhk/image/upload/v1680749458/NoteDown%20AI/landing-bg_n5bcpn.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <div className="flex h-full w-full flex-col items-center gap-10 rounded-lg bg-white/20 backdrop-blur-sm">
              <h1 className="flex justify-center pt-14 font-serif text-5xl font-extrabold italic text-[#313133]">
                NoteDown AI
              </h1>
              <TabsContainer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
