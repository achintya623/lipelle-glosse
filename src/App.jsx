import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import constProducts from "./assets/products.js";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [products, setProducts] = useState(constProducts);
  const [cart, setCart] = useState();

  const cartItems = products.filter((p) => p.added);

  const totalCartItem = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalCartPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  function addToCart(id) {
    setProducts((items) =>
      items.map((item) =>
        item.id === id ? { ...item, added: true, quantity: 1 } : item
      )
    );
  }

  function increment(id) {
    setProducts((items) =>
      items.map((item) => {
        if (item.quantity === item.stock) return item;
        return item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item;
      })
    );
  }

  function decrement(id) {
    setProducts((items) =>
      items.map((item) => {
        if (item.id !== id) return item;

        if (item.quantity === 0) return item;

        if (item.quantity === 1) {
          return {
            ...item,
            quantity: 0,
            added: false,
          };
        }

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      })
    );
  }

  function deleteFromCart(id) {
    setProducts((items) =>
      items.map((item) =>
        item.id === id ? { ...item, added: false, quantity: 0 } : item
      )
    );
  }

  const navigate = useNavigate();

  function buyNow(id) {
    const product = products.find((p) => p.id === id);

    if (!product.added) {
      setProducts((items) =>
        items.map((item) =>
          item.id === id ? { ...item, added: true, quantity: 1 } : item
        )
      );
    }

    navigate("/cart");
  }

  return (
    <div className="h-screen">
      <nav className="flex items-center justify-between px-3 sm:px-8 lg:px-32 h-16 sm:h-20">
        <div>
          <NavLink to="/">
            <h1 className="font-volkhov text-base xs:text-[16px] sm:text-2xl md:text-3xl lg:text-5xl font-bold uppercase transition-all duration-300  hover:-translate-y-1 hover:scale-105">
              Lipelle Glosse
            </h1>
          </NavLink>
        </div>
        <div className="flex  sm:gap-4 text-[12px] sm:text-sm font-poppins xs:text-[12px]">
          {[
            { path: "/shop", label: "Shop" },
            {
              path: "/cart",
              label: totalCartItem === 0 ? "Cart" : `Cart(${totalCartItem})`,
            },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
        px-3 sm:px-6 py-1 sm:py-1 rounded-xl sm:rounded-3xl transition-all duration-300 text-[16px]
        ${
          isActive
            ? "bg-black text-white transition-all duration-300  hover:-translate-y-1 hover:scale-105 cursor-pointer"
            : "text-black transition-all duration-300  hover:-translate-y-1 hover:scale-105 cursor-pointer"
        }
      `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
      <div className="min-h-[76vh]">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                cart={cart}
                setCart={setCart}
                addToCart={addToCart}
                decrement={decrement}
                increment={increment}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                products={products}
                cart={cart}
                setCart={setCart}
                addToCart={addToCart}
                decrement={decrement}
                increment={increment}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                products={products}
                cart={cart}
                setCart={setCart}
                cartItems={cartItems}
                increment={increment}
                decrement={decrement}
                totalCartItem={totalCartItem}
                totalCartPrice={totalCartPrice}
                deleteFromCart={deleteFromCart}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetails
                products={products}
                addToCart={addToCart}
                increment={increment}
                decrement={decrement}
                buyNow={buyNow}
              />
            }
          />
        </Routes>
      </div>
      <footer className="w-full border-t mt-10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <NavLink to="/">
            <h1 className="font-volkhov text-xl sm:text-2xl lg:text-3xl font-bold uppercase transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              Lipelle Glosse
            </h1>
          </NavLink>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm sm:text-base font-poppins">
            {["Support center", "Services", "Offers", "FAQ"].map((item) => (
              <span
                key={item}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
