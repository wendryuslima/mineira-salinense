import About from "./components/about";
import Benefits from "./components/benefits";
import Depoiments from "./components/depoiments";
import Footer from "./components/footer";
import Header from "./components/header";

import Main from "./components/main";
import Preparation from "./components/preparation";

const Home = () => {
  return (
    <div className="">
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
