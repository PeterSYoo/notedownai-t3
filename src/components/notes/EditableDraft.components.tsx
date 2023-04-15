// -------------------------------------- Imports ------------------------------------ ***
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";

// -------------------------------- Component Function ------------------------------- ***
export const EditableDraft = () => {
  // ------------------------------------- States ------------------------------------ ***
  const [data, setData] = useState<any>(null);

  const editorH1 = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  const editorH3 = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  const editorP = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  // ------------------------------------ Effects ------------------------------------ ***
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../data.json");
        const data = await response.json();

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data !== null) {
      editorH1.commands.setContent(`<h1>${data?.h1}</h1>`);
      editorH3.commands.setContent(`<h3>${data?.h3}</h3>`);
      editorP.commands.setContent(`<p>${data?.p}</p>`);
    }
  }, [data]);

  if (data === null) return <>Data loading...</>;

  // -------------------------------------- JSX -------------------------------------- ***
  return (
    <>
      <section className="flex flex-col gap-3">
        <EditorContent editor={editorH1} />
        <EditorContent editor={editorH3} />
        <EditorContent editor={editorP} />
      </section>
    </>
  );
};
