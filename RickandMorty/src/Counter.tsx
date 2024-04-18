import { Button } from "@mui/material";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Auth app countewssr</h3>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count - {count}
      </button>
      <Button variant="contained">Mui auth button</Button>
    </div>
  );
}

export default Counter;
