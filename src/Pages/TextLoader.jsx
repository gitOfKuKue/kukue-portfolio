import { useEffect, useState } from "react";

function TextLoader() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/feedback.txt")
      .then((res) => res.text())
      .then((data) => setText(data));
  }, []);

  return <pre>{text}</pre>;
}

export default TextLoader;
