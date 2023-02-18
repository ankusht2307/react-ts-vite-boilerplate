const TextArea = (): JSX.Element => {
  const onChangeHandler = (text: string): void => {
    console.log(text);
  };

  return (
    <textarea
      name=""
      id=""
      cols={30}
      rows={10}
      style={{ width: "100%", height: "100%" }}
      onChange={(event) => onChangeHandler(event.target.value)}
    />
  );
};

export default TextArea;
