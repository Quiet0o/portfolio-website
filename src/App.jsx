import "./App.css";
import HeroPage from "./components/HeroPage/HeroPage";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Menu />
      <HeroPage />
      <Projects />
    </div>
  );
}

export default App;
