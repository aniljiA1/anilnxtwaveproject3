import TypingBox from "./components/TypingBox";
import Keyboard from "./components/Keyboard";
import Stats from "./components/Stats";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Touch Typing Trainer</h1>

      <Timer />
      <TypingBox />
      <Keyboard />
      <Stats />
    </div>
  );
}

export default App;
