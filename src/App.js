import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Home,
  ProductList,
  Navigation,
  Footer,
  Cart,
  SignIn,
  SignUp,
  Wishlist,
  Searchbar,
  PageNotFound,
  SingleProductPage,
  Checkout
} from "./pages/";
import "./App.css";
import Mockman from "mockman-js";
import { PrivateRoute } from "./pages/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="mockbee" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/404notfound" element={<PageNotFound />} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="*" element={<Navigate to="/404notfound" replace />} />

        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
