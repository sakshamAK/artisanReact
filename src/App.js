
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, ProductList, Navigation, Footer, Cart, SignIn, SignUp, Wishlist, Searchbar, PageNotFound } from "./pages/";
import "./App.css";
import Mockman from "mockman-js"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="mockbee" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/404notfound" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to = "/404notfound" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
