import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    if (text.length > 0) document.title = text;
  }, [text]);

  console.log("Component rendering");

  return (
    <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
  );
}

export default App;
