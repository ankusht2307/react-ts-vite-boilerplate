import { useContext, useState } from "react";
import BoldIcon from "../assets/type-bold.svg";
import { EditorContext } from "../shared/EditorContext";

const BoldTool = (): JSX.Element => {
  const [bold, setBold] = useState(false);

  const context = useContext(EditorContext);

  const clickHandler = (): void => {
    setBold((isBold) => !isBold);
    console.log("bold :", bold);
    console.log(context);
  };

  return (
    <button
      type="button"
      onClick={clickHandler}
      style={{
        border: "1px solid #000",
        cursor: "pointer",
        width: "min-content",
        height: "inherit",
      }}
    >
      <img src={BoldIcon} alt="bold" />
    </button>
  );
};

export default BoldTool;
