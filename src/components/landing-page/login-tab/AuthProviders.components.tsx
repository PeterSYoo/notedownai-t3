// -------------------------------------- Imports ------------------------------------ ***
import { signIn, signOut, useSession } from "next-auth/react";
import { type FC } from "react";
import { BsDiscord, BsGithub, BsGoogle } from "react-icons/bs";

// -------------------------------- Component Function ------------------------------- ***
export const AuthProviders: FC = () => {
  // ------------------------------------- States ------------------------------------ ***
  const { data: sessionData } = useSession();

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      <div className="flex justify-center gap-10 text-3xl text-[#565452]">
        {/* ------------------------------ Google ------------------------------------ */}
        <button
          onClick={() => void signIn("google", { callbackUrl: "/dashboard" })}
          className="hover:text-[#353432]"
        >
          <BsGoogle />
        </button>
        {/* -------------------------------------------------------------------------- */}
        {/* ------------------------------ Discord ----------------------------------- */}
        <button
          onClick={() => void signIn("discord", { callbackUrl: "/dashboard" })}
          className="hover:text-[#353432]"
        >
          <BsDiscord />
        </button>
        {/* -------------------------------------------------------------------------- */}
        {/* ------------------------------ GitHub ------------------------------------ */}
        <button
          onClick={() => void signIn("github")}
          className="hover:text-[#353432]"
        >
          <BsGithub />
        </button>
        {/* -------------------------------------------------------------------------- */}
      </div>
    </>
  );
};
