import "./App.css";
import About from "./components/About";
import Name from "./components/Name";

function App() {
  return (
    <div className="flex flex-wrap h-screen">
      <div className="w-1/2 ">
        <Name />
      </div>
      <div className="w-1/2">
        <About />
      </div>
    </div>
  );
}

export default App;
