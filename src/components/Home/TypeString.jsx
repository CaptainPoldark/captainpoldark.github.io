import React, { useEffect, useState } from "react";

function TypeString(props) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(false);
  const [backspace, setBackspace] = useState(false);
  const words = props.words;

  useEffect(() => {
    const timeoutBlink = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 565);
    return () => clearTimeout(timeoutBlink);
  }, [blink]);

  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !backspace
    ) {
      
      setBackspace(true);
      return;
    }

    if (subIndex === 0 && backspace) {
      setBackspace(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (backspace ? -1 : 1));
    }, 130);

    return () => clearTimeout(timeout);
  }, [subIndex, index, backspace]);

  return (
    <div className="profession">{`<> ${words[index].substring(
      0,
      subIndex
    )} ${blink ? "|" : "\u2008"} </>`}</div>
  );
}

export default TypeString;
