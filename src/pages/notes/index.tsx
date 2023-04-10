// -------------------------------------- Imports ------------------------------------ ***
import { useState } from "react";
import { InstructionsModal } from "~/components/notes/InstructionsModal.components";

// -------------------------------- Component Function ------------------------------- ***
const NotesPage = () => {
  // ------------------------------------- States ------------------------------------ ***
  const [isInstrucitonsModal, setIsInstructionsModal] = useState<boolean>(true);

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      {isInstrucitonsModal && (
        <InstructionsModal setIsInstructionsModal={setIsInstructionsModal} />
      )}
      <main className="flex flex-grow p-10">
        <div className="">Test</div>
      </main>
    </>
  );
};

export default NotesPage;
