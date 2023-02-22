import { createContext } from "react";

export const EditorContext = createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

const Context = ({ children }: Props): JSX.Element => {
  return (
    <EditorContext.Provider value={"context"}>
      {children}
    </EditorContext.Provider>
  );
};

export default Context;
