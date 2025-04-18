import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Auth from "../Pages/Auth/Auth";
import Register from "../Pages/Register/Register";
import Products from "../Pages/Products/Products";
import Home from "../Pages/Home/Home";
import Users from "../Pages/Users/Users";
import Header from "../Widgets/Header/Header";
import Product from "../Pages/Product/Product";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/users" element={<Users />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
