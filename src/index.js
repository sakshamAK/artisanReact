import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { APIProvider } from "./contexts/APIContext/APIContext"
import { ProductProvider } from "./contexts/ProductListingContext/ProductListingContext";
import { CartProvider } from "./contexts/CartContext/CartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <APIProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </APIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
