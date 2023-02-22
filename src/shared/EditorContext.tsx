import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type EditorSettings = {
  currentSelection: string;
};

type EditorContextType = {
  editorContext: EditorSettings | null;
  setEditorContext: React.Dispatch<React.SetStateAction<EditorSettings | null>>;
};

export const EditorContext = createContext<EditorContextType | null>(null);

const Context = ({ children }: Props): JSX.Element => {
  const [editorContext, setEditorContext] = useState<EditorSettings | null>(
    null
  );
  return (
    <EditorContext.Provider value={{ editorContext, setEditorContext }}>
      {children}
    </EditorContext.Provider>
  );
};

export default Context;
