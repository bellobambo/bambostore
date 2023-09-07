"use client"

import Link from 'next/link';
import React from 'react'
import useCart from './(store)/store';
import Modal from './Modal';

export default function Header() {
  const cartItems = useCart(state => state.cart)
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);
  console.log(cartItems)
  return (
    <header className="sticky top-0 p-6 bg-gray-500 border-6 border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between">
      {openModal && <Modal />}
      <Link href="/">
        <h1 className="cursor-pointer hover:scale-110">MarketSQuare</h1>
      </Link>
      <div
        onClick={setOpenModal}
        className="relative grid place-items-center group cursor-pointer"
      >
        {cartItems.length > 0 && (
          <div className="absolute aspect-square h-4 sm:h-5 top-0 bg-blue-400 text-white rounded-full right-0 grid place-items-center -translate-y-1/2 translate-x-1/2 pointer-events-none">
            <p className="sm:text-sm text-xs">{cartItems.length}</p>
          </div>
        )}
        <i className="cursor-pointer hover:text-slate-900 fa-solid fa-cart-shopping group-hover:text-slate-500"></i>
      </div>
    </header>
  );
}
