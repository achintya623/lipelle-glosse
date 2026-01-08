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
      <nav className="flex flex-row justify-between h-[12vh] items-center pl-80 pr-80">
        <div style={{ padding: "0px 20px" }}>
          <NavLink to="/">
            <h1 className="font-volkhov text-5xl font-bold uppercase transition-all duration-300  hover:-translate-y-1 hover:scale-105">
              Lipelle Glosse
            </h1>
          </NavLink>
        </div>
        <div className="w-2xs flex justify-around text-base font-poppins text-neutral-900">
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
        px-10 py-2 rounded-3xl transition-all duration-300 text-[16px]
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
      <div className="w-[98vw] h-[12vh] flex justify-between items-center mt-5 ">
        <div style={{ padding: "0px 20px" }}>
          <NavLink to="/">
            <h1 className="font-volkhov text-3xl font-bold ml-[15vw] uppercase transition-all duration-300  hover:-translate-y-1 hover:scale-105 cursor-pointer">
              Lipelle Glosse
            </h1>
          </NavLink>
        </div>
        <div className="flex w-[50vw] justify-center gap-15 cursor-pointer ">
          <div className="transition-all duration-300  hover:-translate-y-1 hover:scale-105 cursor-pointer">
            Support center
          </div>
          <div className="transition-all duration-300  hover:-translate-y-1 hover:scale-105 cursor-pointer">
            Services
          </div>
          <div className="transition-all duration-300  hover:-translate-y-1 hover:scale-105 cursor-pointer">
            Offers
          </div>
          <div className="transition-all duration-300  hover:-translate-y-1 hover:scale-105 cursor-pointer">
            FAQ
          </div>
        </div>
      </div>
    </div>
  );
}
