
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, ProductList, Navigation, Footer, Cart, SignIn, SignUp } from "./pages/";
import Mockman from "mockman-js"
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="mockbee" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/404notfound" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to = "/404notfound" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
