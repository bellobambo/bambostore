"use client";

import React from "react";
import ReactDOM from "react-dom"; // Corrected import statement
import useCart from "./(store)/store";
import { useRouter } from "next/navigation";

export default function Modal() {
  const closeModal = useCart((state) => state.setOpenModal);
  const cartItems = useCart((state) => state.cart);

  const router = useRouter();

  async function checkout() {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem.price_id,
        quantity: 1,
      };
    });
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    });
    const data = await res.json();
    router.push(data.session.url);
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div
        onClick={closeModal}
        className="bg-transparent absolute inset-0"
      ></div>
      <div className="flex flex-col gap-4 bg-white absolute right-0 h-screen w-screen shadow-lg sm:w-96 max-w-screen">
        <div className="flex items-center justify-between text-xl relative p-6">
          <h1 className="">cart</h1>
          <i
            onClick={closeModal}
            className="fa-solid fa-xmark coursor-pointer hover:opacity-60"
          ></i>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3"></div>
        </div>
        <div className="p-4 flex flex-col gap-4 overflow-scroll flex-1">
          {cartItems.length === 0 ? (
            <p>There is nothing to show</p>
          ) : (
            <p>
              {cartItems.map((cartItem, itemIndex) => {
                return (
                  <div
                    className="flex flex-col gap-2 border-l border-solid border-slate-700 px-2"
                    key={itemIndex}
                  >
                    <div className="flex items-center justify-between">
                      <h1>{cartItem.name}</h1>
                      <p>${cartItem.cost / 100}</p>
                    </div>
                    <p className="text-slate-600 text-sm">Quantity : 1</p>
                  </div>
                );
              })}{" "}
            </p>
          )}
        </div>
        <div
          onClick={checkout}
          className="border border-solid border-slate-700 text-xl m-4 p-6 uppercase grid place-items-center hover:opacity-60 cursor-pointer"
        >
          Order
        </div>
      </div>
    </div>
  );
}

// ReactDOM.render(
//   <Modal />,
// );
