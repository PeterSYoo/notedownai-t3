import { signIn, signOut, useSession } from "next-auth/react";
import { type FC } from "react";
import { BsDiscord, BsGithub, BsGoogle } from "react-icons/bs";

export const AuthProviders: FC = () => {
  // ------------------------------------- States ------------------------------------ ***
  const { data: sessionData } = useSession();

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      <div className="flex justify-center gap-10 text-3xl text-white/50">
        {/* ------------------------------ Google ------------------------------------ */}
        <button
          onClick={() => void signIn("google", { callbackUrl: "/dashboard" })}
          className="hover:text-white"
        >
          <BsGoogle />
        </button>
        {/* -------------------------------------------------------------------------- */}
        {/* ------------------------------ Discord ----------------------------------- */}
        <button
          onClick={() => void signIn("discord", { callbackUrl: "/dashboard" })}
          className="hover:text-white"
        >
          <BsDiscord />
        </button>
        {/* -------------------------------------------------------------------------- */}
        {/* ------------------------------ GitHub ------------------------------------ */}
        <button onClick={() => void signIn()} className="hover:text-white">
          <BsGithub />
        </button>
        {/* -------------------------------------------------------------------------- */}
      </div>
      {/* -------------------------------- Logout ------------------------------------ */}
      {sessionData ? (
        <button
          onClick={() => void signOut()}
          className="rounded-lg bg-white/30 p-3"
        >
          Logout
        </button>
      ) : null}
      {/* ---------------------------------------------------------------------------- */}
    </>
  );
};
