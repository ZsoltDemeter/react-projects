import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Hobbies from "./pages/Hobbies";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Hobbies />
      <Education />
      <Contact />
    </>
  );
}

export default App;
