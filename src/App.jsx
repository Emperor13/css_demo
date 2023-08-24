import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

import "./App.css";
import Header from "./components/Header";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home /> }></Route>
          <Route path="/about" element={ <About /> }></Route>
          <Route path="/contact" element={ <Contact /> }></Route>
          <Route path="/products" element={ <Products /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
