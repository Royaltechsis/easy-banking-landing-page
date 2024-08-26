import react from "react" ;
import "./App.css";
import  Navbar  from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";


function App() {
  return (
    <> 
      < Navbar/>
      < Hero/>
      < Features/>
      < Articles/>
      < Footer />
    </>
  );
}

export default App;
