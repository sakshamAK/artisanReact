
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./pages/Components/Navigation/Navigation";
import { Home } from "./pages/Home/Home";
import { ProductList } from "./pages/ProductList/ProductList";
import Mockman from "mockman-js"
import { Footer } from "./pages/Components/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="mockbee" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
