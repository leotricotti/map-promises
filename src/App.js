import { NavBar } from "./components/NavBar/NavBar";
import { Routes, Route} from "react-router-dom";
import { Home } from "./pages/home";
import { Products } from "./pages/products";
import { Contact } from "./pages/contact/index";
import { Cart } from "./pages/cart/index";

export const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </main>
    </>
  );
};
