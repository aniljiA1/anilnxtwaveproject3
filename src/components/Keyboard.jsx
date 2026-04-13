import { useSelector } from "react-redux";

const Keyboard = () => {
  const { sequence, currentIndex } = useSelector((state) => state.typing);

  const keys = "asdfjkl;".split("");

  return (
    <div className="flex gap-3 mt-5">
      {keys.map((key) => (
        <div
          key={key}
          className={`p-4 border rounded ${
            sequence[currentIndex] === key ? "bg-green-400" : ""
          }`}
        >
          {key}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
