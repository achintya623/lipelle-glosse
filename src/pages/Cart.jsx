import React from "react";
import CartProductCard from "../components/CartProductCard";
import { Link } from "react-router-dom";

export default function Cart({
  cartItems,
  increment,
  decrement,
  totalCartItem,
  totalCartPrice,
  deleteFromCart,
}) {
  const tax = Math.floor(totalCartPrice * 0.2);
  const subtotal = Math.floor(totalCartPrice);
  const total = subtotal + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 min-h-[76vh]">
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center min-h-[76vh] text-center">
          <div className="text-xl sm:text-2xl">Your cart is empty</div>

          <Link to="/shop">
            <button className="mt-6 px-10 py-3 bg-black text-white rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              SHOP NOW
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12 pt-10">
          {/* CART ITEMS */}
          <div className="flex-1 flex flex-col items-center lg:items-end">
            {cartItems.map((product) => (
              <CartProductCard
                key={product.id}
                product={product}
                decrement={decrement}
                increment={increment}
                deleteFromCart={deleteFromCart}
              />
            ))}
          </div>

          {/* SUMMARY */}
          <div className="w-full lg:w-[350px] flex justify-center">
            <div className="w-full border border-gray-300 rounded-xl p-6 flex flex-col gap-4">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="flex justify-between">
                <span>Subtotal ({totalCartItem} items)</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax (20%)</span>
                <span>${tax}</span>
              </div>

              <div className="h-px bg-gray-300 my-2"></div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <button className="mt-4 w-full py-3 bg-black text-white rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
