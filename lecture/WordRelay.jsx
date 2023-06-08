const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("긍정왕");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue("");
      setResult("딩댕동");
      inputRef.current.focus();
    } else {
      setResult("땡!");
      setValue("");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <p>{word}</p>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChange} />
        <button type="submit">입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
