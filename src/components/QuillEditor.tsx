import { useState } from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { modules, formats } from "./QuillToolbar";

const Editor = () => {
  const [editorState, setEditorState] = useState<ReactQuillProps | null>({
    value: null || undefined,
  });
  const handleChange = (value: string) => {
    setEditorState({ value });
  };

  return (
    <>
      <QuillToolbar />
      <ReactQuill
        theme="snow"
        value={editorState?.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </>
  );
};

export default Editor;
