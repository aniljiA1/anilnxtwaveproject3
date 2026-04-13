import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tick } from "../features/typing/typingSlice";

const Timer = () => {
  const dispatch = useDispatch();
  const { timeLeft, isRunning } = useSelector((state) => state.typing);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return <h2>Time Left: {timeLeft}s</h2>;
};

export default Timer;
