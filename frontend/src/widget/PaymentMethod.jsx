import { useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import OrderSummary from "../components/OrderSummary";
import { useCart } from "../hooks/addToCart";


export default function PaymentMethod() {
  const { getCartTotalWithTax } = useCart();
  const [hideCardFields, setHideCardFields] = useState(false);
  return (
    <>
      <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:pt-6 lg:overflow-hidden ">

        {/* Mobile order summary */}
        <section
          aria-labelledby="order-heading"
          className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden"
        >
          <Disclosure as="div" className="mx-auto max-w-lg ">
            <div className="flex items-center justify-between">
              <h2
                id="order-heading"
                className="text-lg font-medium text-gray-900"
              >
                Your Order
              </h2>
              <DisclosureButton className="group font-medium text-blue-600 hover:text-blue-500">
                <span className="group-[:not([data-open])]:hidden">
                  Hide full summary
                </span>
                <span className="group-data-[open]:hidden">
                  Show full summary
                </span>
              </DisclosureButton>
            </div>

            <DisclosurePanel className="mt-4">
              <OrderSummary />
            </DisclosurePanel>

            <p className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
              <span className="text-base">Total</span>
              <span className="text-base">{getCartTotalWithTax()}</span>
            </p>
          </Disclosure>
        </section>

        {/* Order summary */}
        <section className="hidden w-full max-w-md flex-col pt-2 bg-gray-50 lg:flex">
          <OrderSummary />
        </section>

        {/* Checkout form */}
        <section
          aria-labelledby="payment-heading"
          className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-4"
        >
          <div className="mx-auto max-w-lg">
            {!hideCardFields && (
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`flex-1 flex items-center justify-center rounded-md border border-transparent ${
                    hideCardFields
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  } py-2 font-bold hover:bg-gray-800/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2`}
                  onClick={() => setHideCardFields(true)}
                >
                  COD
                </button>
              </div>
            )}

            {hideCardFields && (
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`flex-1 flex items-center justify-center rounded-md border border-transparent ${
                    hideCardFields
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  } py-2 font-bold hover:bg-gray-800/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2`}
                  onClick={() => setHideCardFields(false)}
                >
                  Master Card / Visa
                </button>
              </div>
            )}

            <div className="relative mt-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm font-medium text-gray-500">
                  or
                </span>
              </div>
            </div>

            {!hideCardFields && (
              <div className="mt-8">
                <p className="text-xl font-medium text-blue-600 text-center">
                  Payment Via Card
                </p>
              </div>
            )}
            {hideCardFields && (
              <div className="mt-8">
                <p className="text-xl font-medium text-blue-600 text-center">
                  Payment Via Cash On Delivery
                </p>
              </div>
            )}

            <form className="mt-6">
              <div className="grid grid-cols-12 gap-x-4 gap-y-6">
                <div className="col-span-full">
                  <label
                    htmlFor="email-address"
                    className="block text-sm/6 font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email-address"
                      name="email-address"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* Card fields are hidden if hideCardFields is true */}
                {!hideCardFields && (
                  <>
                    <div className="col-span-full">
                      <label
                        htmlFor="name-on-card"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        Name on card
                      </label>
                      <div className="mt-2">
                        <input
                          id="name-on-card"
                          name="name-on-card"
                          type="text"
                          autoComplete="cc-name"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="card-number"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        Card number
                      </label>
                      <div className="mt-2">
                        <input
                          id="card-number"
                          name="card-number"
                          type="tel"
                          autoComplete="cc-number"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>
                    <div className="col-span-8 sm:col-span-9">
                      <label
                        htmlFor="expiration-date"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        Expiration date (MM/YY)
                      </label>
                      <div className="mt-2">
                        <input
                          id="expiration-date"
                          name="expiration-date"
                          type="tel"
                          autoComplete="cc-exp"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>
                    <div className="col-span-4 sm:col-span-3">
                      <label
                        htmlFor="cvc"
                        className="block text-sm/6 font-medium text-gray-700"
                      >
                        CVC
                      </label>
                      <div className="mt-2">
                        <input
                          id="cvc"
                          name="cvc"
                          type="tel"
                          autoComplete="csc"
                          className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="col-span-full">
                  <label
                    htmlFor="address"
                    className="block text-sm/6 font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outlinefocus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-4">
                  <label
                    htmlFor="city"
                    className="block text-sm/6 font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-4">
                  <label
                    htmlFor="region"
                    className="block text-sm/6 font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      id="region"
                      name="region"
                      type="text"
                      autoComplete="address-level1"
                      className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-4">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm/6 font-medium text-gray-700"
                  >
                    Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      autoComplete="postal-code"
                      className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <div className="flex h-5 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      defaultChecked
                      id="same-as-shipping"
                      name="same-as-shipping"
                      type="checkbox"
                      className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:checked]:opacity-100"
                      />
                      <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="same-as-shipping"
                  className="text-sm font-medium text-gray-900"
                >
                  Billing address is the same as shipping address
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Pay {getCartTotalWithTax()}
              </button>

              <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
                <LockClosedIcon
                  aria-hidden="true"
                  className="mr-1.5 size-5 text-gray-400"
                />
                Payment details stored in plain text
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
