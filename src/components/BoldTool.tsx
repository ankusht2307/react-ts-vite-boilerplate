import BoldIcon from "../assets/type-bold.svg";

const BoldTool = (): JSX.Element => {
  const clickHandler = (): void => {
    console.log("clicked");
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
      <img src={BoldIcon} alt="ss" />
    </button>
  );
};

export default BoldTool;
