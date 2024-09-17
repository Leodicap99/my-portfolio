import "./App.css";
import About from "./components/About";
import Name from "./components/Name";

function App() {
  return (
    <div className="flex flex-wrap h-screen">
      <img
        src="/my-portfolio/photo.jpg"
        alt="my pic"
        className="h-52 w-48 rounded-full object-cover border-white border-2"
      />
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
