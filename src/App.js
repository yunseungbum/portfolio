import React from "react";
import Combined from "./components/Combined";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechnicalDocuments from "./components/TechnicalDocuments";
import Information from "./components/Information";
import Footer from "./components/Footer";
import "./css/Theme.css";

export default function App() {
  return <>
    <a className="skip-link" href="#projects">프로젝트로 바로가기</a>
    <main>
      <Combined />
      <Projects />
      <Skills />
      <TechnicalDocuments />
      <Information />
    </main>
    <Footer />
  </>;
}