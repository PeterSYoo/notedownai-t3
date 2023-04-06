import { InfoCircledIcon } from "@radix-ui/react-icons";
import { BsDiscord, BsGithub, BsGoogle } from "react-icons/bs";

export const LoginTab = () => {
  // JSX --------------------------------------------------------------------------- ***
  return (
    <>
      {/* Username ----------------------------------------------------------------- */}
      <fieldset className="flex flex-col gap-1">
        <label className="flex items-center gap-2 text-white/80" htmlFor="name">
          Username
          <InfoCircledIcon />
        </label>
        <input
          className="h-[35px] rounded-lg border border-white/20 bg-transparent px-2 text-white/50 focus:outline-none"
          id="name"
        />
      </fieldset>
      {/* -------------------------------------------------------------------------- */}
      {/* Password ----------------------------------------------------------------- */}
      <fieldset className="flex flex-col gap-1">
        <label
          className="flex items-center gap-2 text-white/80"
          htmlFor="username"
        >
          Password
          <InfoCircledIcon />
        </label>
        <input
          className="h-[35px] rounded-lg border border-white/20 bg-transparent px-2 text-white/50 focus:outline-none"
          id="username"
          type="password"
        />
      </fieldset>
      {/* -------------------------------------------------------------------------- */}
      {/* Login Button ------------------------------------------------------------- */}
      <button className="mt-2 rounded-lg bg-[#48484D] px-4 py-2 text-white/50 hover:text-white">
        Login
      </button>
      {/* -------------------------------------------------------------------------- */}
      {/* Divider ------------------------------------------------------------------ */}
      <div className="grid grid-cols-[100px_1fr_100px] items-center pt-1">
        <div className="border-b border-white/20"></div>
        <p className="flex justify-center text-sm text-white/50">or</p>
        <div className="border-b border-white/20"></div>
      </div>
      {/* -------------------------------------------------------------------------- */}
      <button className="rounded-lg bg-[#48484D] px-4 py-2 text-white/50 hover:text-white">
        Login as Guest
      </button>
      {/* Divider ------------------------------------------------------------------ */}
      <div className="grid grid-cols-[100px_1fr_100px] items-center pt-1">
        <div className="border-b border-white/20"></div>
        <p className="flex justify-center text-sm text-white/50">or</p>
        <div className="border-b border-white/20"></div>
      </div>
      {/* -------------------------------------------------------------------------- */}
      {/* Auth Providers ----------------------------------------------------------- */}
      <div className="flex justify-center gap-10 pt-2 text-3xl text-white/50">
        <button className="hover:text-white">
          <BsGoogle />
        </button>
        <button className="hover:text-white">
          <BsDiscord />
        </button>
        <button className="hover:text-white">
          <BsGithub />
        </button>
      </div>
      {/* -------------------------------------------------------------------------- */}
    </>
  );
};
