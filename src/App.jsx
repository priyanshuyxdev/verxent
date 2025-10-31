import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Container from "./components/Container";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Container>
        <Navbar />

        <Home />
        <Services />
        <Work/>
        {/* <About /> */}
      </Container>
    </>
  );
};

export default App;
