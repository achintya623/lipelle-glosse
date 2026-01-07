import React from "react";
import CartProductCard from "../components/CartProductCard";
import { Routes, Route, Link } from "react-router-dom";

export default function Cart({
  products,
  cart,
  setCart,
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
    <div className="w-[98vw] min-h-[76vh] ">
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center min-h-[76vh]">
          <div className="flex justify-center items-center text-2xl">
            Your cart is empty
          </div>
          <div className="h-30 w-120 flex justify-center items-center">
            <Link to="/shop">
              <button className="h-15 w-50 bg-black text-white rounded-2xl">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-between pt-[5vh]">
          <div className="w-[80vw] flex flex-col justify-start items-end">
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
          <div className="w-[30vw] h-[50vh] flex flex-col justify-evenly items-center ">
            <div className=" w-[20vw] h-[45vh] border-gray-400 border rounded-lg flex flex-col justify-evenly items-center p-8">
              <div className="h-full flex flex-col justify-evenly w-[12vw]">
                <div className="text-black text-[20px] font-bold">
                  Order Summary
                </div>
                <div className="flex justify-between text-2xl font-bold">
                  <div>${total}</div>
                </div>
                <div className="flex justify-between">
                  <div>Subtotal ({totalCartItem} items)</div>
                  <div>${totalCartPrice}</div>
                </div>
                <div className="flex justify-between">
                  <div>Tax (20%)</div>
                  <div>${tax}</div>
                </div>
                <div className="w-[12vw] bg-gray-400 h-px"></div>
                <div className="flex justify-between text-[20px] font-bold">
                  <div>Total</div>
                  <div>${total}</div>
                </div>
                <button className="w-[12vw] h-[5vh] bg-black rounded-lg flex justify-center items-center text-white font-bold">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
