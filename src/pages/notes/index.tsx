// -------------------------------------- Imports ------------------------------------ ***
import { signOut, useSession } from "next-auth/react";
import * as Switch from "@radix-ui/react-switch";
import { FileIcon, FilePlusIcon } from "@radix-ui/react-icons";

// -------------------------------- Component Function ------------------------------- ***
const NotesPage = () => {
  // ------------------------------------- States ------------------------------------ ***

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      <main className="flex flex-grow">
        {/* ----------------------------- Side Nav ----------------------------------- */}
        <section className="flex w-[204px] flex-col justify-between bg-[#EEE6E1] text-[#565452]">
          <section className="mx-auto w-full max-w-[150px]">
            <div className="flex flex-col gap-[16px] pt-[28px]">
              <h1 className="flex justify-center font-serif text-[20px] font-bold italic">
                NoteDown AI
              </h1>
              {/* --------------------- Theme Switcher ------------------------------- */}
              <div className="flex justify-center">
                <Switch.Root className="SwitchRoot bg-white" id="airplane-mode">
                  <Switch.Thumb className="SwitchThumb" />
                </Switch.Root>
              </div>
              {/* -------------------------------------------------------------------- */}
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-[27px] pt-[47px]">
              {/* ----------------------- New Notes ---------------------------------- */}
              <div className="flex w-full items-center justify-start gap-[12px] px-2">
                <button>
                  <FilePlusIcon />
                </button>
                <button className="text-[14px] font-light">New Notes</button>
              </div>
              {/* -------------------------------------------------------------------- */}
              {/* ------------------------ Divider ----------------------------------- */}
              <div className="w-full border-b border-[#CFCCC8]"></div>
              {/* -------------------------------------------------------------------- */}
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-[27px] px-2 pt-[47px]">
              {/* -------------------- Notes Container ------------------------------- */}
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
            {/* ------------------------ Divider ----------------------------------- */}
            <div className="w-full border-b border-[#CFCCC8]"></div>
            {/* -------------------------------------------------------------------- */}
            {/* ----------------------- Logout Button -------------------------------- */}
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => void signOut()}
                className="w-full rounded-lg bg-[#565452] p-3 text-[14px] font-semibold text-[#EEE6E1] hover:bg-[#353432]"
              >
                Logout
              </button>
            </div>
            {/* ---------------------------------------------------------------------- */}
          </section>
        </section>
        {/* -------------------------------------------------------------------------- */}
      </main>
    </>
  );
};

export default NotesPage;
