import Editor from "./Editor";
import EditorContext from "./shared/EditorContext";

function App(): JSX.Element {
  return (
    <EditorContext>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Editor />
      </div>
    </EditorContext>
  );
}

export default App;
