import {
  EyeClosedIcon,
  EyeOpenIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { AuthProviders } from "./AuthProviders.components";

export const LoginTab = () => {
  // States ------------------------------------------------------------------------ ***
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // JSX --------------------------------------------------------------------------- ***
  return (
    <>
      <section className="flex flex-col gap-2">
        {/* Username ----------------------------------------------------------------- */}
        <fieldset className="flex flex-col gap-1">
          <label
            className="flex items-center gap-2 text-white/80"
            htmlFor="username"
          >
            Username
            <Popover.Root>
              <Popover.Trigger asChild>
                <button className="" aria-label="Username requirements">
                  <InfoCircledIcon className="h-[17px] w-[17px]" />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="PopoverContent">
                  <p className="text-sm text-black/60">
                    Only numbers and letters are allowed, no spaces, max 24
                    characters.
                  </p>
                  <Popover.Arrow className="PopoverArrow" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
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
            <Popover.Root>
              <Popover.Trigger asChild>
                <button className="" aria-label="Password requirements">
                  <InfoCircledIcon className="h-[17px] w-[17px]" />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="PopoverContent">
                  <p className="text-sm text-black/60">
                    Password must contain 1 uppercase, 1 lowercase, 1 special
                    character, no spaces, and max 24 characters.
                  </p>
                  <Popover.Arrow className="PopoverArrow" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </label>
          <div className="flex h-[35px] items-center justify-between rounded-lg border border-white/20 px-2">
            <input
              className="bg-transparent text-white/50 focus:outline-none"
              id="username"
              type={showPassword ? "text" : "password"}
            />
            {showPassword ? (
              <button onClick={() => setShowPassword(false)}>
                <EyeOpenIcon className="h-[20px] w-[20px] text-white/60 hover:text-white" />
              </button>
            ) : (
              <button onClick={() => setShowPassword(true)}>
                <EyeClosedIcon className="h-[20px] w-[20px] text-white/60 hover:text-white" />
              </button>
            )}
          </div>
        </fieldset>
        {/* -------------------------------------------------------------------------- */}
        {/* Login Button ------------------------------------------------------------- */}
        <button className="mt-2 rounded-lg bg-[#48484D] px-4 py-2 text-white/50 hover:text-white">
          Login
        </button>
        {/* -------------------------------------------------------------------------- */}
      </section>
      {/* Divider ------------------------------------------------------------------ */}
      <div className="grid grid-cols-[100px_1fr_100px] items-center">
        <div className="border-b border-white/20"></div>
        <p className="flex justify-center text-sm text-white/50">or</p>
        <div className="border-b border-white/20"></div>
      </div>
      {/* -------------------------------------------------------------------------- */}
      <button className="rounded-lg bg-[#48484D] px-4 py-2 text-white/50 hover:text-white">
        Login as Guest
      </button>
      {/* Divider ------------------------------------------------------------------ */}
      <div className="grid grid-cols-[100px_1fr_100px] items-center">
        <div className="border-b border-white/20"></div>
        <p className="flex justify-center text-sm text-white/50">or</p>
        <div className="border-b border-white/20"></div>
      </div>
      {/* -------------------------------------------------------------------------- */}
      {/* Auth Providers ----------------------------------------------------------- */}
      <AuthProviders />
      {/* -------------------------------------------------------------------------- */}
    </>
  );
};
