import { useEffect, useRef, useState } from "react";
import Comment from "./components/Comment";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { LoadingContainer } from "./styles/global";

const commentsLimit = 20;

const App = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const isBottomVisible = useIntersectionObserver(
    ref,
    {
      threshold: 0
    },
    false
  );

  useEffect(() => {
    isBottomVisible && setCount(count + 1);
  }, [isBottomVisible, count]);

  return (
    <div>
      {(() => {
        const comments = [];

        for (let i = 1; i <= count * commentsLimit; i++) {
          comments.push(<Comment key={i} id={i} />);
        }

        return comments;
      })()}
      <LoadingContainer ref={ref}>
        Loading...
      </LoadingContainer>
    </div>
  );
}

export default App;
