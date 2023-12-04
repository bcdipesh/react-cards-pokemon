import { useState } from "react";

function useFlip(initialState = true) {
  const [isFlipped, setIsFlipped] = useState(initialState);

  function flip() {
    setIsFlipped(!isFlipped);
  }

  return [isFlipped, flip];
}

export default useFlip;
