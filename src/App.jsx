import "daisyui/dist/full.css";
import Nav from "./Components/Nav/Nav";
import Hero from "./Hero/Hero";
import Our from "./Components/Our/Our";
import MainSec from "./Components/MainSec/MainSec";
import FootSec from "./Components/FootSec/FootSec";

function App() {
  return (
    <>
      <div className="font-Lexend">
        <div className="w-[85%] m-auto">
          <Nav></Nav>
          <Hero></Hero>
          <Our></Our>
          <MainSec></MainSec>
        </div>
        <FootSec></FootSec>
      </div>
    </>
  );
}

export default App;
