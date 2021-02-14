import React, { useState } from "react";
import "./likeButton.css";

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const toggleCount = () => {
    if (count === 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }

    setIsLike(!isLike);
  };
  return (
    <div>
      <button onClick={toggleCount} className={isLike ? "btn--liked" : null}>
        Like<span>{count}</span>
      </button>
    </div>
  );
}
