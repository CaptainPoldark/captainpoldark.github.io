import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import HomeBottom from "./components/Home/HomeBottom";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Loader from "./components/Loader";
import Particle from "./components/Particles";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const showLoading = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => clearTimeout(showLoading);
  }, []);
  return (
    <>
      {" "}
      <Particle />
      <Router>
        {/* <Loader loading={loading} /> */}
        {loading ? <Loader /> : <></>}

        <div className="App" id={loading ? "no-scroll" : "scroll"}>
          <Navigation />

          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <Home />

                  <HomeBottom />
                </>
              }
            />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/resume" exact element={<Resume />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
