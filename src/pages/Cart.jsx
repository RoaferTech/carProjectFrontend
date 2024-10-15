import React, { useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/products/CartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateSubtotal = (price, quantity) => price * quantity;

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-semibold mb-8 text-center md:text-left">
        Shopping Cart
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
          <thead className="bg-[#05C3DD] text-white">
            <tr>
              <th className="px-2 py-3 md:px-6 text-left text-xs md:text-sm font-semibold uppercase">
                Image
              </th>
              <th className="px-2 py-3 md:px-6 text-left text-xs md:text-sm font-semibold uppercase">
                Product Name
              </th>
              <th className="px-2 py-3 md:px-6 text-center text-xs md:text-sm font-semibold uppercase">
                Price
              </th>
              <th className="px-2 py-3 md:px-6 text-center text-xs md:text-sm font-semibold uppercase">
                Quantity
              </th>
              <th className="px-2 py-3 md:px-6 text-right text-xs md:text-sm font-semibold uppercase">
                Subtotal
              </th>
              <th className="px-2 py-3 md:px-6 text-right text-xs md:text-sm font-semibold uppercase">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="px-2 py-4 md:px-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                  />
                </td>

                <td className="px-2 py-4 md:px-6">
                  <p className="font-medium text-gray-700 text-xs md:text-base">
                    {item.name}
                  </p>
                </td>

                <td className="px-2 py-4 md:px-6 text-center text-gray-700 text-xs md:text-base">
                  ${item.price.toLocaleString()}
                </td>

                <td className="px-2 py-4 md:px-6 text-center">
                  <div className="flex justify-center items-center">
                    <button
                      className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l hover:bg-gray-300 transition"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="mx-3 text-lg font-medium">
                      {item.quantity}
                    </span>
                    <button
                      className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r hover:bg-gray-300 transition"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4 md:px-6 text-right text-gray-700 text-xs md:text-base">
                  $
                  {calculateSubtotal(
                    item.price,
                    item.quantity
                  ).toLocaleString()}
                </td>
                <td className="px-2 py-4 md:px-6 text-right">
                  <button
                    className="text-red-600 hover:text-red-800 transition text-lg"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <CiSquareRemove className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 p-4 flex flex-col md:flex-row justify-end">
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold text-gray-700">Cart Total</h3>
          <div className="flex justify-between text-lg font-medium my-4">
            <span>Total:</span>
            <span>${calculateTotal().toLocaleString()}</span>
          </div>
          <Link to="/checkout">
            <button
              to="/checkout"
              className="mt-4 w-full bg-[#05C3DD] text-white py-3 rounded hover:bg-[#05C3DD] transition"
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
