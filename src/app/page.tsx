import About from "./components/about";
import Benefits from "./components/benefits";
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
    </div>
  );
};

export default Home;
