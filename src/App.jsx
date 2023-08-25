import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/Header";
import Products from "./pages/Products";
import Login from "./pages/Login";
import RootLayout from "./components/RootLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/products" element={<Products />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
