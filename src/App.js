import React from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills"; // 정확한 경로 확인
import Projects from "./components/Projects";
import Activity from "./components/Activity";
import Footer from "./components/Footer"; // 정확한 경로 확인
import Combined from "./components/Combined";

const App = () => {
  return (
    <div>
      <Navbar />
      <Combined/>
      <Skills />
      <Projects />
      {/* <Activity /> */}
      <Footer />
    </div>
  );
};

export default App;
