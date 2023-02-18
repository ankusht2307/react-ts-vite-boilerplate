import TextArea from "./components/TextArea";
import Toolbar from "./components/Toolbar";

const Editor = (): JSX.Element => {
  return (
    <div
      style={{
        border: "1px solid #000",
        width: "50vw",
        height: "50vh",
      }}
    >
      <Toolbar />
      <TextArea />
    </div>
  );
};

export default Editor;
