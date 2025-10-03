import React from "react";
import { useCartContext } from "../contexts/CartContext";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function PopUpNotification() {
  const { showNotification, setShowNotification } = useCartContext();
  if (!showNotification) return null;
  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition show={showNotification}>
          <div
            className="pointer-events-auto w-full max-w-sm rounded-lg shadow-lg outline-1 outline-black/5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0"
            style={{ backgroundColor: "var(--white)" }}
          >
            <div className="p-4">
              <div className="flex items-start">
                <div className="shrink-0">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="size-6"
                    style={{ color: "var(--green)" }}
                  />
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    Successfully Added To Cart!
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "var(--gray)" }}>
                    Check your cart to view the item.
                  </p>
                </div>
                <div className="ml-4 flex shrink-0">
                  <button
                    type="button"
                    onClick={() => setShowNotification(false)}
                    className="inline-flex rounded-md focus:outline-2 focus:outline-offset-2"
                    style={{
                      color: "var(--gray)",
                      focusOutlineColor: "var(--blue)",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "var(--text)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "var(--gray)")
                    }
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon aria-hidden="true" className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
