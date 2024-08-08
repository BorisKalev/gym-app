import "./App.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Hero from "./components/Header/UI/Hero";
import Exercices from "./components/Header/UI/Exercices";
import Start from "./components/Header/UI/Start";
import Pricing from "./components/Header/UI/Pricing";
import Testimonials from "./components/Header/UI/Testimonials";
import Footer from "./components/Header/UI/Footer";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header></Header>
      <Hero />
      <Exercices />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
