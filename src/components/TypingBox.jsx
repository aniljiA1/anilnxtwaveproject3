import { useDispatch } from "react-redux";
import { typeKey, startTest } from "../features/typing/typingSlice";

const TypingBox = () => {
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    dispatch(startTest());
    dispatch(typeKey(e.key));
  };

  return (
    <input
      type="text"
      onKeyDown={handleKeyDown}
      className="border p-4 w-full text-xl"
      placeholder="Start typing..."
      autoFocus
    />
  );
};

export default TypingBox;
