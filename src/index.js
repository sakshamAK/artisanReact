import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { APIProvider } from "./contexts/APIContext/APIContext"
import { ProductProvider } from "./contexts/ProductListingContext/ProductListingContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <APIProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </APIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
