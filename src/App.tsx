import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./pages/cart/Cart";
import ProductList from "./pages/Products/ProductList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
