// -------------------------------------- Imports ------------------------------------ ***
import { useState } from "react";
import { EditableDraft } from "~/components/notes/EditableDraft.components";
import { InstructionsModal } from "~/components/notes/InstructionsModal.components";

// -------------------------------- Component Function ------------------------------- ***
const NotesPage = () => {
  // ------------------------------------- States ------------------------------------ ***
  const [isInstrucitonsModal, setIsInstructionsModal] = useState<boolean>(true);

  // ------------------------------- Custom Functions -------------------------------- ***

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      {isInstrucitonsModal && (
        <InstructionsModal setIsInstructionsModal={setIsInstructionsModal} />
      )}
      <main className="flex flex-grow p-10">
        <EditableDraft />
      </main>
    </>
  );
};

export default NotesPage;
