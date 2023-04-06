import { InfoCircledIcon } from "@radix-ui/react-icons";

export const SignupTab = () => {
  // JSX --------------------------------------------------------------------------- ***
  return (
    <>
      {/* Email -------------------------------------------------------------------- */}
      <fieldset className="flex flex-col gap-1">
        <label
          className="flex items-center gap-2 text-white/80"
          htmlFor="email"
        >
          Email
          <InfoCircledIcon />
        </label>
        <input
          className="h-[35px] rounded-lg border border-white/20 bg-transparent px-2 text-white/50 focus:outline-none"
          id="email"
          type="email"
        />
      </fieldset>
      {/* -------------------------------------------------------------------------- */}
      {/* Username ----------------------------------------------------------------- */}
      <fieldset className="flex flex-col gap-1">
        <label
          className="flex items-center gap-2 text-white/80"
          htmlFor="username"
        >
          Username
          <InfoCircledIcon />
        </label>
        <input
          className="h-[35px] rounded-lg border border-white/20 bg-transparent px-2 text-white/50 focus:outline-none"
          id="username"
        />
      </fieldset>
      {/* -------------------------------------------------------------------------- */}
      {/* Password ----------------------------------------------------------------- */}
      <fieldset className="flex flex-col gap-1">
        <label
          className="flex items-center gap-2 text-white/80"
          htmlFor="password"
        >
          Password
          <InfoCircledIcon />
        </label>
        <input
          className="h-[35px] rounded-lg border border-white/20 bg-transparent px-2 text-white/50 focus:outline-none"
          id="password"
          type="password"
        />
      </fieldset>
      {/* -------------------------------------------------------------------------- */}
      {/* Confirm Password --------------------------------------------------------- */}
      <fieldset className="flex flex-col gap-1">
        <label
          className="flex items-center gap-2 text-white/80"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <input
          className="h-[35px] rounded-lg border border-white/20 bg-transparent px-2 text-white/50 focus:outline-none"
          id="confirmPassword"
          type="password"
        />
      </fieldset>
      {/* -------------------------------------------------------------------------- */}
      {/* Sign Up Button ----------------------------------------------------------- */}
      <button className="mt-2 rounded-lg bg-[#48484D] px-4 py-2 text-white/50 hover:text-white">
        Sign Up
      </button>
      {/* -------------------------------------------------------------------------- */}
    </>
  );
};
