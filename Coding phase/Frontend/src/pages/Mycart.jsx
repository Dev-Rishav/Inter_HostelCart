import React from 'react';
import { NavLink,Link } from 'react-router-dom';
const Mycart = () => {
  return (
    <div>
     <section class="bg-gray-100 py-8 antialiased md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>

    <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div class="space-y-6">
            {/* cart item */}
          <div class="rounded-lg border border-gray-300 bg-white p-4 shadow-xl  md:p-6">
            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                {/* image */}
              <a href="#" class="shrink-0 md:order-1">
                <img class="h-20 w-20 " src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
              </a>
                  {/* price */}
              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="text-end md:order-4 md:w-32">
                  <p class="text-base font-bold text-gray-900 ">price -$69</p>
                </div>
              </div>
                   {/* name */}
              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <Link to="/" class="text-base font-medium text-gray-900 hover:underline ">PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT</Link>
                    {/* remove button */}
                <div class=" items-center">
                  <button type="button" class="p-2 inline-flex items-center text-sm font-medium text-red-600 hover:underline border-red-800 hover:border rounded-md">
                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
           {/* cart item */}
           <div class="rounded-lg border border-gray-300 bg-white p-4 shadow-xl  md:p-6">
            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                {/* image */}
              <a href="#" class="shrink-0 md:order-1">
                <img class="h-20 w-20 " src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
              </a>
                  {/* price */}
              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="text-end md:order-4 md:w-32">
                  <p class="text-base font-bold text-gray-900 ">price -$69</p>
                </div>
              </div>
                   {/* name */}
              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
              <Link to="/" class="text-base font-medium text-gray-900 hover:underline ">PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT</Link>
                    {/* remove button */}
                <div class=" items-center">
                  <button type="button" class="p-2 inline-flex items-center text-sm font-medium text-red-600 hover:underline border-red-800 hover:border rounded-md">
                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
        
      </div>
     {/* order summary */}
      <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full shadow-2xl">
        <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
          <p class="text-xl font-semibold text-gray-900 ">Order summary</p>

          <div class="space-y-4">
            <div class="space-y-2">
              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 ">Original price</dt>
                <dd class="text-base font-medium text-gray-900 ">$6969</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 ">Savings</dt>
                <dd class="text-base font-medium text-green-600">-$0</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 ">Store Pickup</dt>
                <dd class="text-base font-medium text-gray-900 ">$0</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 ">Tax</dt>
                <dd class="text-base font-medium text-gray-900 ">$0</dd>
              </dl>
            </div>

            <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
              <dt class="text-base font-bold text-black ">Total</dt>
              <dd class="text-base font-bold text-red-600 ">$6969</dd>
            </dl>
          </div>

          <Link to="/" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-300 border border-gray-400 ">Proceed to Checkout</Link>

          <div class="flex items-center justify-center gap-2">
            <span class="text-sm font-normal text-gray-500"> or </span>
            <Link to="/" class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
              Continue Shopping
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </Link>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</section>  
    </div>
  )
}

export default Mycart