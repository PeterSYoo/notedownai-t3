// -------------------------------------- Imports ------------------------------------ ***
import { Cross2Icon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

// -------------------------------- Component Function ------------------------------- ***
export const WrongPasswordModal = ({
  setIsWrongPasswordModal,
}: {
  setIsWrongPasswordModal: (arg0: boolean) => void;
}) => {
  // ------------------------------------- States ------------------------------------ ***
  const [scale, setScale] = useState<number>(0.1);

  const modalRef = useRef<HTMLDivElement>(null);

  // ------------------------------- Custom Functions -------------------------------- ***
  const handleClickOutsideModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setScale(0.1);
      setIsWrongPasswordModal(false);
    }
  };

  const handleCloseModal = () => {
    setScale(0.1);
    setIsWrongPasswordModal(false);
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
        setScale(0.1);
        setIsWrongPasswordModal(false);
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
    }, 50);
  }, []);

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      <section className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center">
        {/* -------------------------- Modal Container ------------------------------- */}
        <div
          ref={modalRef}
          className="h-fit w-fit rounded-xl bg-[#565452] px-5 pt-3 shadow-md shadow-black/70 transition-all duration-300"
          style={{
            transform: `translate(0%, 0%) scale(${scale})`,
          }}
        >
          <div className="flex w-full justify-end">
            <button onClick={handleCloseModal}>
              <Cross2Icon className="h-[17px] w-[17px] text-[#EEE6E1] hover:text-white" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 pb-7 pt-1 text-[#EEE6E1]">
            <h1 className="font-bold">Wrong Password!</h1>
            <p className="max-w-[300px] px-2 text-center text-sm">
              Incorrect password.
            </p>
          </div>
        </div>
        {/* -------------------------------------------------------------------------- */}
      </section>
    </>
  );
};
