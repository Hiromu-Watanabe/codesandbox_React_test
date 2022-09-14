import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/colorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faseShowFlag, setfaseShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setfaseShowFlag(!faseShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faseShowFlag || setfaseShowFlag(true);
      } else {
        faseShowFlag && setfaseShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <ColorfulMessage color="green">こんにちは🌞</ColorfulMessage>
      <ColorfulMessage color="purple">こんばんは🌙</ColorfulMessage>
      <p style={{ color: "purple" }}>お元気ですか</p>
      <button onClick={onClickCountUp}>count up</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faseShowFlag && <p style={{ fontSize: "30px" }}>🐮</p>}
    </>
  );
};

export default App;
