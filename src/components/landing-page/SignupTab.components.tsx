import { InfoCircledIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";

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
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="" aria-label="Email requirements">
                <InfoCircledIcon className="h-[17px] w-[17px]" />
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="PopoverContent">
                <p className="text-sm text-black/60">
                  Must be in proper email format with no spaces and special
                  characters other than @. Max 24 characters.
                </p>
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
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
