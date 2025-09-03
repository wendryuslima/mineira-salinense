"use client";
import { useEffect } from "react";
import About from "./components/about";
import Benefits from "./components/benefits";
import Depoiments from "./components/depoiments";
import Footer from "./components/footer";
import Header from "./components/header";

import Main from "./components/main";
import Preparation from "./components/preparation";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Main />
      <Benefits />
      <About />
      <Preparation />
      <Depoiments />
      <Footer />
    </div>
  );
};

export default Home;
