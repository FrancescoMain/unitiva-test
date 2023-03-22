import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductList from "./Products/ProductList";

function App() {
  return (
    <div className="App">
      {/* //importato product list */}
      <ProductList></ProductList>
    </div>
  );
}

export default App;
