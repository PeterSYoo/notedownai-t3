// -------------------------------------- Imports ------------------------------------ ***
import { Cross2Icon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

export const SuccessModal = ({
  setIsSuccessModal,
}: {
  setIsSuccessModal: (arg0: boolean) => void;
}) => {
  // ------------------------------------- States ------------------------------------ ***
  const [scale, setScale] = useState<number>(0.9);

  const modalRef = useRef<HTMLDivElement>(null);

  // ------------------------------- Custom Functions -------------------------------- ***
  const handleClickOutsideModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsSuccessModal(false);
    }
  };

  // ------------------------------------ Effects ------------------------------------ ***
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideModal);
    return () => {
      document.removeEventListener("click", handleClickOutsideModal);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSuccessModal(false);
        setScale(0.9);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setScale(1);
    }, 1);
  }, []);

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      <section className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-white/20">
        {/* -------------------------- Modal Container ------------------------------- */}
        <div
          ref={modalRef}
          className="h-fit w-fit rounded-xl bg-[#232325] px-5 pt-3 transition-all duration-300"
          style={{
            transform: `translate(0%, 0%) scale(${scale})`,
          }}
        >
          <div className="flex w-full justify-end">
            <button onClick={() => setIsSuccessModal(false)}>
              <Cross2Icon className="h-[17px] w-[17px] text-white/70 hover:text-white" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 pb-7 text-white/70">
            <h1 className="font-bold">Successfully Signed Up!</h1>
            <p className="max-w-[300px] px-2 text-center text-sm">
              Thank you for signing up! Head over to the login tab to login.
            </p>
          </div>
        </div>
        {/* -------------------------------------------------------------------------- */}
      </section>
    </>
  );
};
