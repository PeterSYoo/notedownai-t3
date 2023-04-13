// -------------------------------------- Imports ------------------------------------ ***

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// -------------------------------- Component Function ------------------------------- ***
export const EditableDraft = () => {
  // ------------------------------------- States ------------------------------------ ***
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  });

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
};
