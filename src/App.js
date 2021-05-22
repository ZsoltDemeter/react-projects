import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
