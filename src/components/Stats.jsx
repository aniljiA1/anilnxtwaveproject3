import { useSelector } from "react-redux";

const Stats = () => {
  const { total, correct } = useSelector((state) => state.typing);

  const accuracy = total === 0 ? 0 : ((correct / total) * 100).toFixed(2);

  return (
    <div className="mt-5">
      <p>Total Keys: {total}</p>
      <p>Correct Keys: {correct}</p>
      <p>Accuracy: {accuracy}%</p>
    </div>
  );
};

export default Stats;
