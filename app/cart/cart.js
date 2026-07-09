"use client";

import Link from "next/link";
import { ShoppingCart, Trash2 } from "lucide-react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Dental Chair Model X",
      price: 45000,
      qty: 1,
    },
    {
      id: 2,
      name: "Endodontic Files Kit",
      price: 2500,
      qty: 2,
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1B4873] to-[#163a5c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ShoppingCart size={40} className="mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Your Shopping Cart</h1>
          <p className="text-white/90 mt-2">
            Review your selected dental equipment and proceed to checkout.
          </p>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          {cartItems.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600 mb-6">Your cart is empty.</p>
              <Link
                href="/products"
                className="bg-[#26A7EB] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2193cf] transition"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border rounded-xl p-6 shadow-sm"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">
                        ₹{item.price} × {item.qty}
                      </p>
                    </div>

                    <div className="flex items-center gap-6">
                      <p className="font-semibold text-gray-900">
                        ₹{item.price * item.qty}
                      </p>
                      <button className="text-red-500 hover:text-red-700 transition">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-10 bg-gray-50 p-8 rounded-2xl shadow-sm">
                <div className="flex justify-between text-lg font-semibold mb-6">
                  <span>Total Amount</span>
                  <span>₹{total}</span>
                </div>

                <Link
                  href="/contact-us"
                  className="block text-center bg-[#1B4873] text-white py-3 rounded-lg font-semibold hover:bg-[#1f1c85] transition"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Cart;
