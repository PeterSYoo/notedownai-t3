// -------------------------------------- Imports ------------------------------------ ***
import { type NextPage } from "next";
import { TabsContainer } from "~/components/landing-page/TabsContainer";
import { TypingText } from "~/components/landing-page/TypingText.components";

// -------------------------------- Component Function ------------------------------- ***
const Home: NextPage = () => {
  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      <main className="flex h-full w-full flex-grow">
        <div className="flex flex-grow bg-[url('https://res.cloudinary.com/dryh1nvhk/image/upload/v1680749458/NoteDown%20AI/landing-bg_n5bcpn.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <div className="flex h-full w-full flex-col items-center gap-5 rounded-lg bg-[#EEE6E1] bg-opacity-30 backdrop-blur-sm">
              <h1 className="flex justify-center pt-12 font-serif text-5xl font-bold italic text-[#353432]">
                NoteDown AI
              </h1>
              <p className="h-[35px] max-w-[300px] text-center text-[#353432]">
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
