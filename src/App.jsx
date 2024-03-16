import "daisyui/dist/full.css";
import Nav from "./Components/Nav/Nav";
import Hero from "./Hero/Hero";
import Our from "./Components/Our/Our";
import MainSec from "./Components/MainSec/MainSec";

function App() {
  return (
    <>
      <div className="w-[85%] m-auto">
        <Nav></Nav>
        <Hero></Hero>
        <Our></Our>
        <MainSec></MainSec>
      </div>
    </>
  );
}

export default App;
