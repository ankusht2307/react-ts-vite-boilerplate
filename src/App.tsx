import Editor from "./Editor";
import Context from "./shared/Context";

function App(): JSX.Element {
  return (
    <Context>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Editor />
      </div>
    </Context>
  );
}

export default App;
