import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
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
          className=" px-4 py-6 sm:px-6 lg:hidden"
          style={{ backgroundColor: "var(--lightGray)" }}
        >
          <Disclosure as="div" className="mx-auto max-w-lg ">
            <div className="flex items-center justify-between">
              <p
                id="order-heading"
                className="text-lg font-medium"
                style={{ color: "var(--text)" }}
              >
                Your Order
              </p>
              <DisclosureButton
                className="group font-medium"
                style={{ color: "var(--blue)" }}
              >
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

            <p
              className="mt-6 flex items-center justify-between border-t pt-6 text-sm font-medium "
              style={{
                borderColor: "var(--darkGray)",
                color: "var(--darkGray)",
              }}
            >
              <span className="text-base">Total</span>
              <span className="text-base">{getCartTotalWithTax()}</span>
            </p>
          </Disclosure>
        </section>

        {/* Order summary */}
        <section className="hidden w-full max-w-md flex-col pt-2 lg:flex">
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
                  className="flex-1 flex items-center justify-center rounded-md border py-2 font-bold transition-colors"
                  style={{
                    backgroundColor: hideCardFields
                      ? "var(--black)"
                      : "var(--lightGray)",
                    color: hideCardFields ? "var(--white)" : "var(--text)",
                    borderColor: "var(--gray)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--active)";
                    e.currentTarget.style.color = "var(--white)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = hideCardFields
                      ? "var(--black)"
                      : "var(--lightGray)";
                    e.currentTarget.style.color = hideCardFields
                      ? "var(--white)"
                      : "var(--text)";
                  }}
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
                  className="flex-1 flex items-center justify-center rounded-md border py-2 font-bold transition-colors"
                  style={{
                    backgroundColor: hideCardFields
                      ? "var(--black)"
                      : "var(--lightGray)",
                    color: hideCardFields ? "var(--white)" : "var(--text)",
                    borderColor: "var(--gray)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--active)";
                    e.currentTarget.style.color = "var(--white)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = hideCardFields
                      ? "var(--black)"
                      : "var(--lightGray)";
                    e.currentTarget.style.color = hideCardFields
                      ? "var(--white)"
                      : "var(--text)";
                  }}
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
                <div
                  className="w-full border-t"
                  style={{ borderColor: "var(--Gray)" }}
                />
              </div>
              <div className="relative flex justify-center">
                <span
                  className=" px-2 text-sm font-medium rounded-full"
                  style={{ backgroundColor: "var(--lightGray)" }}
                >
                  or
                </span>
              </div>
            </div>

            {!hideCardFields && (
              <div className="mt-8">
                <p
                  className="text-xl font-medium text-center"
                  style={{ color: "var(--blue)" }}
                >
                  Payment Via Card
                </p>
              </div>
            )}
            {hideCardFields && (
              <div className="mt-8">
                <p
                  className="text-xl font-medium text-center"
                  style={{ color: "var(--blue)" }}
                >
                  Payment Via Cash On Delivery
                </p>
              </div>
            )}

            <form className="mt-6">
              <div className="grid grid-cols-12 gap-x-4 gap-y-6">
                <div className="col-span-full">
                  <label
                    htmlFor="email-address"
                    className="block text-sm/6 font-medium "
                    style={{ color: "var(--gray)" }}
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email-address"
                      name="email-address"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md px-3 py-2 text-base outline-1 focus:-outline-offset-2 sm:text-sm/6"
                      style={{
                        backgroundColor: "var(--white)",
                        color: "var(--text)",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.outlineColor = "var(--blue)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.outlineColor = "var(--gray)")
                      }
                    />
                  </div>
                </div>

                {/* Card fields are hidden if hideCardFields is true */}
                {!hideCardFields && (
                  <>
                    <div className="col-span-full">
                      <label
                        htmlFor="name-on-card"
                        className="block text-sm/6 font-medium"
                        style={{ color: "var(--gray)" }}
                      >
                        Name on card
                      </label>
                      <div className="mt-2">
                        <input
                          id="name-on-card"
                          name="name-on-card"
                          type="text"
                          autoComplete="cc-name"
                          className="block w-full rounded-md px-3 py-2 text-base outline-1 focus:-outline-offset-2 sm:text-sm/6"
                          style={{
                            backgroundColor: "var(--white)",
                            color: "var(--text)",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.outlineColor = "var(--blue)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.outlineColor = "var(--gray)")
                          }
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="card-number"
                        className="block text-sm/6 font-medium"
                        style={{ color: "var(--gray)" }}
                      >
                        Card number
                      </label>
                      <div className="mt-2">
                        <input
                          id="card-number"
                          name="card-number"
                          type="tel"
                          autoComplete="cc-number"
                          className="block w-full rounded-md px-3 py-2 text-base outline-1 -outline-offset-1 focus:outline focus:-outline-offset-2 sm:text-sm/6"
                          style={{
                            backgroundColor: "var(--white)",
                            color: "var(--text)",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.outlineColor = "var(--blue)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.outlineColor = "var(--gray)")
                          }
                        />
                      </div>
                    </div>
                    <div className="col-span-8 sm:col-span-9">
                      <label
                        htmlFor="expiration-date"
                        className="block text-sm/6 font-medium"
                        style={{ color: "var(--gray)" }}
                      >
                        Expiration date (MM/YY)
                      </label>
                      <div className="mt-2">
                        <input
                          id="expiration-date"
                          name="expiration-date"
                          type="tel"
                          autoComplete="cc-exp"
                          className="block w-full rounded-md px-3 py-2 text-base  outline-1  focus:-outline-offset-2 sm:text-sm/6"
                          style={{
                            backgroundColor: "var(--white)",
                            color: "var(--text)",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.outlineColor = "var(--blue)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.outlineColor = "var(--gray)")
                          }
                        />
                      </div>
                    </div>
                    <div className="col-span-4 sm:col-span-3">
                      <label
                        htmlFor="cvc"
                        className="block text-sm/6 font-medium"
                        style={{ color: "var(--gray)" }}
                      >
                        CVC
                      </label>
                      <div className="mt-2">
                        <input
                          id="cvc"
                          name="cvc"
                          type="tel"
                          autoComplete="csc"
                          className="block w-full rounded-md px-3 py-2 text-base outline-1 -outline-offset-1 focus:outline focus:-outline-offset-2 sm:text-sm/6"
                          style={{
                            backgroundColor: "var(--white)",
                            color: "var(--text)",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.outlineColor = "var(--blue)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.outlineColor = "var(--gray)")
                          }
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="col-span-full">
                  <label
                    htmlFor="address"
                    className="block text-sm/6 font-medium "
                    style={{ color: "var(--gray)" }}
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md px-3 py-2 text-base outline-1 -outline-offset-1 focus:outline focus:-outline-offset-2 sm:text-sm/6"
                      style={{
                        backgroundColor: "var(--white)",
                        color: "var(--text)",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.outlineColor = "var(--blue)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.outlineColor = "var(--gray)")
                      }
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-4">
                  <label
                    htmlFor="city"
                    className="block text-sm/6 font-medium "
                    style={{ color: "var(--gray)" }}
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md px-3 py-2 text-base outline-1 -outline-offset-1 focus:outline focus:-outline-offset-2 sm:text-sm/6"
                      style={{
                        backgroundColor: "var(--white)",
                        color: "var(--text)",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.outlineColor = "var(--blue)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.outlineColor = "var(--gray)")
                      }
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-4">
                  <label
                    htmlFor="region"
                    className="block text-sm/6 font-medium"
                    style={{ color: "var(--gray)" }}
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      id="region"
                      name="region"
                      type="text"
                      autoComplete="address-level1"
                      className="block w-full rounded-md px-3 py-2 text-base outline-1 -outline-offset-1 focus:outline focus:-outline-offset-2 sm:text-sm/6"
                      style={{
                        backgroundColor: "var(--white)",
                        color: "var(--text)",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.outlineColor = "var(--blue)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.outlineColor = "var(--gray)")
                      }
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-4">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm/6 font-medium"
                    style={{ color: "var(--gray)" }}
                  >
                    Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      autoComplete="postal-code"
                      className="block w-full rounded-md px-3 py-2 text-base outline-1 -outline-offset-1 focus:outline focus:-outline-offset-2 sm:text-sm/6"
                      style={{
                        backgroundColor: "var(--white)",
                        color: "var(--text)",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.outlineColor = "var(--blue)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.outlineColor = "var(--gray)")
                      }
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
                      className="col-start-1 row-start-1 appearance-none rounded forced-colors:appearance-auto"
                      style={{
                        border: "1px solid var(--gray)",
                        backgroundColor: "var(--white)",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.outlineColor = "var(--blue)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.outlineColor = "var(--gray)")
                      }
                      onChange={(e) => {
                        if (e.currentTarget.checked) {
                          e.currentTarget.style.borderColor = "var(--blue)";
                          e.currentTarget.style.backgroundColor = "var(--blue)";
                          e.currentTarget.style.color = "var(--white)";
                        } else {
                          e.currentTarget.style.borderColor = "var(--gray)";
                          e.currentTarget.style.backgroundColor =
                            "var(--white)";
                          e.currentTarget.style.color = "var(--text)";
                        }
                      }}
                      disabled={false} // Remove or set true as needed
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
                  className="text-sm font-medium "
                  style={{ color: "var(--darkgray)" }}
                >
                  Billing address is the same as shipping address
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: "var(--blue)" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--active)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--blue)")
                }
              >
                Pay {getCartTotalWithTax()}
              </button>

              <p className="mt-6 flex justify-center text-sm font-medium "
                style={{ color: "var(--darkgray)" }}>
                <LockClosedIcon
                  aria-hidden="true"
                  className="mr-1.5 size-5 "
                  style={{ color: "var(--gray)" }}
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
