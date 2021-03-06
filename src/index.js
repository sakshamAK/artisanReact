import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { APIProvider } from "./contexts/APIContext/APIContext";
import { ProductProvider } from "./contexts/ProductListingContext/ProductListingContext";
import { CartProvider } from "./contexts/CartContext/CartContext";
import { AuthProvider } from "./contexts/AuthContext/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <APIProvider>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </APIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
