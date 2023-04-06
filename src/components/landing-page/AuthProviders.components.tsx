import { signIn, signOut, useSession } from "next-auth/react";
import { type FC } from "react";
import { BsDiscord, BsGithub, BsGoogle } from "react-icons/bs";

export const AuthProviders: FC = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <div className="flex justify-center gap-10 text-3xl text-white/50">
        <button
          onClick={() => void signIn("google", { callbackUrl: "/dashboard" })}
          className="hover:text-white"
        >
          <BsGoogle />
        </button>
        <button
          onClick={() => void signIn("discord", { callbackUrl: "/dashboard" })}
          className="hover:text-white"
        >
          <BsDiscord />
        </button>
        <button
          onClick={() => void signIn("github", { callbackUrl: "/dashboard" })}
          className="hover:text-white"
        >
          <BsGithub />
        </button>
      </div>
      {sessionData ? (
        <button
          onClick={() => void signOut()}
          className="rounded-lg bg-white/30 p-3"
        >
          Logout
        </button>
      ) : null}
    </>
  );
};
