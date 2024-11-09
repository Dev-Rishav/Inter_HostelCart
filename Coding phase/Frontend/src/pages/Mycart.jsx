import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, clearCart } from '../Redux/cartSlice';
import Cookies from 'js-cookie';

const Mycart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const token = Cookies.get('token');

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (!token) {
    return (
      <div className="text-center mt-6 sm:mt-8">
        <p className="text-lg text-gray-700">Please sign in to use the cart.</p>
        <Link to="/login" className="text-primary-700 underline hover:no-underline">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gray-100 py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-lg text-gray-700">Your cart is empty.</p>
              <Link to="/" className="text-primary-700 underline hover:no-underline">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="rounded-lg border border-gray-300 bg-white p-4 shadow-xl md:p-6">
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" className="shrink-0 md:order-1">
                          <img className="h-20 w-20" src={item.profileImg} alt={item.name} />
                        </a>
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900">price : ₹{item.price}</p>
                          </div>
                        </div>
                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <Link to="/" className="text-base font-medium text-gray-900 hover:underline">{item.name}</Link>
                          <div className="items-center">
                            <button
                              type="button"
                              className="p-2 inline-flex items-center text-sm font-medium text-red-600 hover:underline border-red-800 hover:border rounded-md"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full shadow-2xl">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                  <p className="text-xl font-semibold text-gray-900">Order summary</p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">Original price</dt>
                        <dd className="text-base font-medium text-gray-900">₹{totalAmount}</dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">Savings</dt>
                        <dd className="text-base font-medium text-green-600">₹0</dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">Store Pickup</dt>
                        <dd className="text-base font-medium text-gray-900">₹0</dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">Tax</dt>
                        <dd className="text-base font-medium text-gray-900">₹0</dd>
                      </dl>
                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                      <dt className="text-base font-bold text-black">Total</dt>
                      <dd className="text-base font-bold text-red-600">₹{totalAmount}</dd>
                    </dl>
                  </div>
                  <Link to="/" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-300 border border-gray-400">Proceed to Checkout</Link>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500"> or </span>
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                      Continue Shopping
                      <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Mycart;