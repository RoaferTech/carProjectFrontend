import React from "react";

const CheckoutForm = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-2/3 px-4">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your First Name"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Your Last Name"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Your Address"
                className="border border-gray-300 p-3 rounded w-full col-span-2"
              />
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Payment Info</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name On Card"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Expire Date"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="CVV"
                className="border border-gray-300 p-3 rounded w-full"
              />
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your First Name"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Your Last Name"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Your Address"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Address 2 (Optional)"
                className="border border-gray-300 p-3 rounded w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-4">
          <div className="bg-white shadow-md rounded-lg p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            <ul className="mb-4 space-y-2">
              <li className="flex justify-between">
                <span>Product Qty:</span>
                <span>5</span>
              </li>
              <li className="flex justify-between">
                <span>Shipping Cost:</span>
                <span>$25.00</span>
              </li>
              <li className="flex justify-between">
                <span>Discount:</span>
                <span>-$5.00</span>
              </li>
              <li className="flex justify-between">
                <span>VAT:</span>
                <span>$20.00</span>
              </li>
              <li className="flex justify-between font-semibold">
                <span>Sub Total:</span>
                <span>$4,540.00</span>
              </li>
              <li className="flex justify-between font-semibold text-[#05C3DD]">
                <span>Total Pay:</span>
                <span>$4,540.00</span>
              </li>
            </ul>
            <button className="w-full bg-#05C3DD text-white p-3 rounded hover:bg-[#05C3DD] transition">
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
