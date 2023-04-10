// -------------------------------------- Imports ------------------------------------ ***
import { signOut } from "next-auth/react";
import * as Switch from "@radix-ui/react-switch";
import {
  FileIcon,
  FilePlusIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// -------------------------------- Component Function ------------------------------- ***
export const SideNav = () => {
  // ------------------------------------- States ------------------------------------ ***
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  // ------------------------------- Custom Functions -------------------------------- ***
  const handleSwitchChange = (checked: boolean) => {
    setIsDarkMode(checked);
    console.log({ isDarkMode });
  };

  // ------------------------------------ Effects ------------------------------------ ***
  useEffect(() => {
    if (isDarkMode) setTheme("light");
    else if (!isDarkMode) setTheme("dark");
  }, [isDarkMode]);

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      {/* ------------------------------- Side Nav ----------------------------------- */}
      <section className="flex h-screen w-[204px] flex-col justify-between bg-[#EEE6E1] text-[#565452] dark:bg-[#101011] dark:text-[#BABBC1]">
        <section className="mx-auto w-full max-w-[150px]">
          <div className="flex flex-col gap-[16px] pt-[28px]">
            <h1 className="flex justify-center font-serif text-[20px] font-bold italic">
              NoteDown AI
            </h1>
            {/* ----------------------- Theme Switcher ------------------------------- */}
            <div className="flex justify-center">
              <form>
                <Switch.Root
                  className="relative h-[34px] w-[73px] rounded-full bg-white dark:bg-[#BABBC1]"
                  id="airplane-mode"
                  onCheckedChange={handleSwitchChange}
                  checked={isDarkMode}
                >
                  <div className="flex justify-between px-1.5 pt-1">
                    <SunIcon className="h-[22px] w-[22px]" />
                    <MoonIcon className="h-[22px] w-[22px] text-white dark:text-[#101011]" />
                  </div>
                  <Switch.Thumb className="-mt-[26px] block h-[30px] w-[30px] translate-x-[2px] rounded-full bg-[#101011] transition-all duration-200 ease-in-out will-change-transform data-[state=checked]:translate-x-[40px] data-[state=unchecked]:translate-x-[2px] data-[state=checked]:bg-[#565452] data-[state=unchecked]:bg-[#101011]" />
                </Switch.Root>
              </form>
            </div>
            {/* ---------------------------------------------------------------------- */}
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-[27px] pt-[47px]">
            {/* ------------------------- New Notes ---------------------------------- */}
            <div className="flex w-full items-center justify-start gap-[12px] px-2">
              <button>
                <FilePlusIcon />
              </button>
              <button className="text-[14px] font-light">New Notes</button>
            </div>
            {/* ---------------------------------------------------------------------- */}
            {/* -------------------------- Divider ----------------------------------- */}
            <div className="w-full border-b border-[#CFCCC8] dark:border-[#3B3B3E]"></div>
            {/* -------------------------------------------------------------------- */}
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-[27px] px-2 pt-[47px]">
            {/* ---------------------- Notes Container ------------------------------- */}
            <div className="flex w-full items-start justify-start gap-[12px]">
              <button className="pt-1">
                <FileIcon />
              </button>
              <button className="break-all text-start text-[14px] font-light">
                Notes 1121353151351355
              </button>
            </div>
            <div className="flex w-full items-start justify-start gap-[12px]">
              <button className="pt-1">
                <FileIcon />
              </button>
              <button className="break-all text-start text-[14px] font-light">
                Notes 1121
              </button>
            </div>
            <div className="flex w-full items-start justify-start gap-[12px]">
              <button className="pt-1">
                <FileIcon />
              </button>
              <button className="break-all text-start text-[14px] font-light">
                Notes 1121353151351355
              </button>
            </div>
            {/* -------------------------------------------------------------------- */}
          </div>
        </section>
        <section className="mx-auto flex w-full max-w-[150px] flex-col gap-[45px] pb-[69px]">
          {/* ---------------------------- Divider ----------------------------------- */}
          <div className="w-full border-b border-[#CFCCC8] dark:border-[#3B3B3E]"></div>
          {/* ------------------------------------------------------------------------ */}
          {/* -------------------------- Logout Button ------------------------------- */}
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={() => void signOut()}
              className="w-full rounded-lg bg-[#565452] p-3 text-[14px] font-semibold text-[#EEE6E1] hover:bg-[#353432] dark:bg-[#BABBC1] dark:text-[#101011] dark:hover:bg-[#cccdd3]"
            >
              Logout
            </button>
          </div>
          {/* ------------------------------------------------------------------------ */}
        </section>
      </section>
      {/* ---------------------------------------------------------------------------- */}
    </>
  );
};
