import "./App.css";
import { Classes } from "./components/Classes";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Loader } from "./components/Loader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  if (loading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="classes" element={<Classes />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
