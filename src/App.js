import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import './App.css';
import Cart from "./Cart";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/singleproduct/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
