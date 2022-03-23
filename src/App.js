
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./pages/Components/";
import { Home } from "./pages/Home/Home";
import { ProductList } from "./pages/ProductList/ProductList";
import Mockman from "mockman-js"
import { Footer } from "./pages/Components/"
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="mockbee" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
