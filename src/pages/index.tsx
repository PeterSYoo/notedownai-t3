// -------------------------------------- Imports ------------------------------------ ***
import { type NextPage } from "next";
import { TabsContainer } from "~/components/landing-page/TabsContainer";
import { TypingText } from "~/components/landing-page/TypingText.components";

// -------------------------------- Component Function ------------------------------- ***
const Home: NextPage = () => {
  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      <main className="flex h-full w-full flex-grow bg-gradient-to-tr from-[#2A2B2E] to-[#3E3E42]">
        <div className="flex flex-grow bg-[url('https://res.cloudinary.com/dryh1nvhk/image/upload/v1680749458/NoteDown%20AI/landing-bg_n5bcpn.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <div className="flex h-full w-full flex-col items-center gap-5 rounded-lg bg-white/10 backdrop-blur-sm">
              <h1 className="flex justify-center pt-12 text-5xl font-extrabold text-[#313133]">
                NoteDown AI
              </h1>
              <p className="h-[35px] max-w-[300px] text-center">
                <TypingText
                  texts={[
                    "Our app employs generative ai that automatically takes notes for you, saving you time and effort.",
                  ]}
                />
              </p>
              <TabsContainer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
