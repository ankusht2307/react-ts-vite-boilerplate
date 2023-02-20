import { createContext, useState } from "react";
import Editor from "./Editor";

export const EditorContext = createContext({});

function App(): JSX.Element {
  const [editorSettings, setEditorSettings] = useState({
    currentSelection: "",
  });
  return (
    <EditorContext.Provider value={{ editorSettings, setEditorSettings }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Editor />
      </div>
    </EditorContext.Provider>
  );
}

export default App;
