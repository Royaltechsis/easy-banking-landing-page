import react from "react" ;
import "./App.css";
import  Navbar  from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Articles from "./components/Articles";


function App() {
  return (
    <> 
      < Navbar/>
      < Hero/>
      < Features/>
      < Articles/>
    </>
  );
}

export default App;
