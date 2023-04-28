
import Navbar from "./component/navbar";
import Hero from "./component/Hero";
import Ourstory from "./component/ourstory";
import Freeclass from "./component/Freeclass";
import Apply from "./component/Apply";
import Pricing from './component/Pricing';

import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Ourstory />
      <Freeclass/>
      <Apply/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App;
